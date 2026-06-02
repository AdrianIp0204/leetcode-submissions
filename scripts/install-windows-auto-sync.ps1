param(
  [int]$IntervalSeconds = 300,
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

if (-not $NoPush) {
  $Arguments += " --push"
}

$Action = New-ScheduledTaskAction -Execute $Node -Argument $Arguments -WorkingDirectory $RepoRoot
$Trigger = New-ScheduledTaskTrigger -AtLogOn
$CurrentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
$Principal = New-ScheduledTaskPrincipal -UserId $CurrentUser -LogonType Interactive -RunLevel Limited
$Settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1)

Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $Trigger -Principal $Principal -Settings $Settings -Description "Automatically commits and pushes LeetCode exports downloaded by the first-party extension." -Force | Out-Null
Start-ScheduledTask -TaskName $TaskName

Write-Host "Installed and started scheduled task: $TaskName"
Write-Host "Repo: $RepoRoot"
Write-Host "Interval: $IntervalSeconds seconds"
Write-Host "Push: $(-not $NoPush)"
