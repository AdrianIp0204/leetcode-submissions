# Publication Plan

This repo should become public only when it reads as a learning trace, not as a trophy shelf.

## Current Verdict

Ready to publish as a learning archive once the current cleanup branch is merged
into the public default branch and the release checklist below still passes.

The archive is valuable because it contains real accepted submissions, preserved
history, model-answer notes, generated weakness reports, and a working local
sync system. It should not be presented as proof of algorithmic mastery. The
strong version is honest: Adrian owns the learning and solutions, while Morrow
assists with review, notes, reports, and organization.

## Public Release Checklist

Before flipping GitHub visibility or treating the repo as portfolio material,
verify all of these are true:

- `npm test` passes.
- `npm run sync:health` reports no source-code sync gap.
- `npm run audit:portfolio` reports no sensitive-material flags and no copied problem-statement flags.
- `npm run audit:model-answers` reports no missing or incomplete model-answer notes.
- The top README clearly says the repo is Adrian's learning archive and that Morrow assists with review, notes, reports, and organization.
- Root problem READMEs keep filled `Pattern`, `Key Idea`, `Mistake / Edge Case`, and `Complexity` sections.
- Failed attempts and multiple accepted submissions are preserved when real source exists.
- No full LeetCode problem statements are copied into the repo.
- The repo explains that old failed attempts cannot be backfilled unless the real source is available.
- The license/no-license status is explicit.

## Maintenance Rules

1. Preserve accepted submissions exactly enough that the learning trace stays honest.
2. Add new failed attempts under `attempts/` and accepted history under `accepted/` as they happen.
3. Keep generated reports current after meaningful sync or note updates.
4. Expand the TypeScript track deliberately instead of scattering one-off language experiments.
5. Update the front README if the repo's purpose changes.

## Honest AI-Assisted Framing

Use language like this:

> This repository is Adrian's LeetCode learning archive. Solutions are Adrian's attempts unless a file says otherwise. Reflection notes, reports, cleanup, and repo organization are AI-assisted with Morrow, Adrian's local AI collaborator.

Avoid language that implies Morrow solved the problems or that Adrian wrote every note unaided. The honest version is stronger.

## Backfill Rule

Do not invent failed attempts.

If a failed attempt source file exists, preserve it. If it does not exist, write a short note like "failed attempt not preserved; reconstructed from memory would be unreliable" instead of fabricating code.

Backfilled accepted submissions should be preserved as real history under
`submissions/<problem>/accepted/...`; do not collapse them into a single
`solution.*` unless Adrian deliberately chooses a curated canonical solution.
