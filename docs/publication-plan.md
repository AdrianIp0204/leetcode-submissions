# Publication Plan

This repo should become public only when it reads as a learning trace, not as a trophy shelf.

## Current Verdict

Keep the repo private for now.

The archive is already valuable because it contains real accepted submissions and a working local sync system. The public version still needs enough reflection to show what Adrian learned, where the weak spots are, and where Morrow's AI-assisted curation begins and ends.

## Public Release Gate

Do not publish until all of these are true:

- `npm test` passes.
- `npm run audit:portfolio` reports no sensitive-material flags.
- The top README clearly says the repo is Adrian's learning archive and that Morrow assists with review, notes, reports, and organization.
- At least 15 representative problems have filled `Pattern`, `Key Idea`, `Mistake / Edge Case`, and `Complexity` sections.
- Failed attempts are preserved for new work when the source exists.
- No full LeetCode problem statements are copied into the repo.
- The repo explains that old failed attempts cannot be backfilled unless the real source is available.

## Cleanup Order

1. Preserve current accepted submissions exactly enough that the early learning trace stays honest.
2. Fill reflections for representative problems first: early brute force, brittle accepted code, first clean pattern solutions, and harder pattern problems.
3. Add new failed attempts under `attempts/` as they happen.
4. Start a deliberate TypeScript track after the exam.
5. Only then consider rewriting the public README for a wider audience.

## Honest AI-Assisted Framing

Use language like this:

> This repository is Adrian's LeetCode learning archive. Solutions are Adrian's attempts unless a file says otherwise. Reflection notes, reports, cleanup, and repo organization are AI-assisted with Morrow, Adrian's local AI collaborator.

Avoid language that implies Morrow solved the problems or that Adrian wrote every note unaided. The honest version is stronger.

## Backfill Rule

Do not invent failed attempts.

If a failed attempt source file exists, preserve it. If it does not exist, write a short note like "failed attempt not preserved; reconstructed from memory would be unreliable" instead of fabricating code.
