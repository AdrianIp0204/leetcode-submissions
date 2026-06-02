param(
  [int]$IntervalSeconds = 30,
  [switch]$NoPush
)

$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $PSScriptRoot
$Node = (Get-Command node -ErrorAction SilentlyContinue).Source

if (-not $Node) {
  throw "Node.js was not found in PATH. Install Node.js first, then run this setup again."
}

$TaskName = "LeetCodeSubmissionsAutoSync"
$ScriptPath = Join-Path $RepoRoot "scripts\auto-sync.mjs"
$IntervalMs = [Math]::Max(30000, $IntervalSeconds * 1000)
$Arguments = "`"$ScriptPath`" --interval=$IntervalMs"
$PushEnabled = -not $NoPush

if ($PushEnabled) {
  $Arguments += " --push"
}

function Stop-ExistingWatcher {
  try {
    Get-CimInstance Win32_Process -Filter "name = 'node.exe'" |
      Where-Object { $_.CommandLine -and $_.CommandLine.Contains($ScriptPath) } |
      ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
  } catch {
    Write-Warning "Could not stop any existing watcher process: $($_.Exception.Message)"
  }
}

function Install-StartupLauncher {
  $InstallDir = Join-Path $env:LOCALAPPDATA "LeetCodeSubmissionsAutoSync"
  $StartupDir = [Environment]::GetFolderPath("Startup")
  $CmdPath = Join-Path $InstallDir "run-auto-sync.cmd"
  $VbsPath = Join-Path $InstallDir "run-auto-sync-hidden.vbs"
  $LogPath = Join-Path $InstallDir "auto-sync.log"
  $ShortcutPath = Join-Path $StartupDir "$TaskName.lnk"
  $WScript = Join-Path $env:SystemRoot "System32\wscript.exe"
  $PushArg = if ($PushEnabled) { " --push" } else { "" }

  if (-not $StartupDir) {
    throw "Could not resolve your Windows Startup folder."
  }

  New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null

  @"
@echo off
cd /d "$RepoRoot"
"$Node" "$ScriptPath" --interval=$IntervalMs$PushArg >> "$LogPath" 2>&1
"@ | Set-Content -Encoding ASCII -Path $CmdPath

  @"
Set shell = CreateObject("WScript.Shell")
shell.Run """$CmdPath""", 0, False
"@ | Set-Content -Encoding ASCII -Path $VbsPath

  $Shell = New-Object -ComObject WScript.Shell
  $Shortcut = $Shell.CreateShortcut($ShortcutPath)
  $Shortcut.TargetPath = $WScript
  $Shortcut.Arguments = "`"$VbsPath`""
  $Shortcut.WorkingDirectory = $RepoRoot
  $Shortcut.Description = "Automatically commits and pushes LeetCode exports handed off by the first-party extension."
  $Shortcut.WindowStyle = 7
  $Shortcut.Save()

  Stop-ExistingWatcher
  Start-Process -FilePath $WScript -ArgumentList "`"$VbsPath`"" -WindowStyle Hidden

  Write-Host "Installed and started Startup launcher: $ShortcutPath"
  Write-Host "Log: $LogPath"
}

try {
  $Action = New-ScheduledTaskAction -Execute $Node -Argument $Arguments -WorkingDirectory $RepoRoot
  $Trigger = New-ScheduledTaskTrigger -AtLogOn
  $CurrentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
  $Principal = New-ScheduledTaskPrincipal -UserId $CurrentUser -LogonType Interactive -RunLevel Limited
  $Settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1)

  Stop-ExistingWatcher
  Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $Trigger -Principal $Principal -Settings $Settings -Description "Automatically commits and pushes LeetCode exports handed off by the first-party extension." -Force | Out-Null
  Start-ScheduledTask -TaskName $TaskName
  Write-Host "Installed and started scheduled task: $TaskName"
} catch {
  Write-Warning "Scheduled Task install failed: $($_.Exception.Message)"
  Write-Host "Falling back to a per-user Startup launcher."
  Install-StartupLauncher
}

Write-Host "Repo: $RepoRoot"
Write-Host "Interval: $IntervalSeconds seconds"
Write-Host "Push: $PushEnabled"
