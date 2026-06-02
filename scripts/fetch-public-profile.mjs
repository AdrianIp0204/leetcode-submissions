#!/usr/bin/env node

import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const defaultConfigPath = path.join(root, ".leetcode-sync.json");
const trackedConfigPath = path.join(root, "config", "leetcode-sync.json");

function readArg(name) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  if (value) return value.slice(prefix.length);
  const index = process.argv.indexOf(`--${name}`);
  if (index !== -1) return process.argv[index + 1];
  return undefined;
}

async function readConfig() {
  const configPath = readArg("config") || (existsSync(defaultConfigPath) ? defaultConfigPath : trackedConfigPath);
  if (!existsSync(configPath)) return {};
  return JSON.parse(await readFile(configPath, "utf8"));
}

function usage() {
  console.error("Usage: node scripts/fetch-public-profile.mjs --username <leetcode-username> [--limit 20]");
  console.error("Or set LEETCODE_USERNAME, or create ignored .leetcode-sync.json from config/leetcode-sync.example.json.");
}

function isoFromUnixSeconds(value) {
  const seconds = Number(value);
  if (!Number.isFinite(seconds)) return null;
  return new Date(seconds * 1000).toISOString();
}

function renderMarkdown(snapshot) {
  const profile = snapshot.profile;
  const stats = snapshot.solvedByDifficulty;
  const contest = snapshot.contestRanking;
  const lines = [
    "# LeetCode Public Snapshot",
    "",
    `- Username: ${snapshot.username}`,
    `- Profile: https://leetcode.com/u/${snapshot.username}/`,
    `- Fetched at: ${snapshot.fetchedAt}`,
  ];

  if (profile.ranking) lines.push(`- Ranking: ${profile.ranking}`);
  if (profile.realName) lines.push(`- Display name: ${profile.realName}`);

  lines.push("", "## Solved", "");
  for (const item of stats) {
    lines.push(`- ${item.difficulty}: ${item.count} solved / ${item.submissions} accepted submissions`);
  }

  if (contest) {
    lines.push("", "## Contest", "");
    lines.push(`- Contests attended: ${contest.attendedContestsCount ?? 0}`);
    if (contest.rating != null) lines.push(`- Rating: ${Math.round(contest.rating)}`);
    if (contest.globalRanking != null) lines.push(`- Global ranking: ${contest.globalRanking}`);
    if (contest.topPercentage != null) lines.push(`- Top percentage: ${contest.topPercentage}`);
    if (contest.badge?.name) lines.push(`- Badge: ${contest.badge.name}`);
  }

  lines.push("", "## Recent Accepted", "");
  if (snapshot.recentAccepted.length === 0) {
    lines.push("- No public recent accepted submissions returned.");
  } else {
    for (const item of snapshot.recentAccepted) {
      lines.push(`- ${item.acceptedAt}: [${item.title}](https://leetcode.com/problems/${item.titleSlug}/) (${item.lang})`);
    }
  }

  lines.push("");
  return lines.join("\n");
}

async function main() {
  const config = await readConfig();
  const username = readArg("username") || process.env.LEETCODE_USERNAME || config.leetcodeUsername;
  const limit = Number(readArg("limit") || process.env.LEETCODE_RECENT_LIMIT || config.recentLimit || 20);

  if (!username) {
    usage();
    process.exit(2);
  }

  const query = `query userProfile($username: String!, $limit: Int!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        userAvatar
        ranking
        reputation
        countryName
        company
        school
        skillTags
        aboutMe
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
    recentAcSubmissionList(username: $username, limit: $limit) {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
      badge {
        name
      }
    }
  }`;

  const response = await fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { username, limit } }),
  });

  if (!response.ok) {
    throw new Error(`LeetCode request failed: HTTP ${response.status}`);
  }

  const body = await response.json();
  if (body.errors?.length) {
    throw new Error(body.errors.map((error) => error.message).join("; "));
  }

  const user = body.data?.matchedUser;
  if (!user) {
    console.error(`No public LeetCode user found for username: ${username}`);
    process.exit(3);
  }

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    username: user.username,
    profile: user.profile,
    solvedByDifficulty: user.submitStatsGlobal?.acSubmissionNum ?? [],
    contestRanking: body.data?.userContestRanking ?? null,
    recentAccepted: (body.data?.recentAcSubmissionList ?? []).map((item) => ({
      ...item,
      acceptedAt: isoFromUnixSeconds(item.timestamp),
    })),
    source: "LeetCode public GraphQL; no login cookie or browser extension used.",
  };

  const outDir = path.join(root, "profile");
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "leetcode-public.json"), `${JSON.stringify(snapshot, null, 2)}\n`);
  await writeFile(path.join(outDir, "recent-accepted.md"), renderMarkdown(snapshot));

  console.log(`Fetched public LeetCode profile for ${user.username}`);
  console.log(`Wrote profile/leetcode-public.json and profile/recent-accepted.md`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
