# Combine Two Tables

- Pattern: left join
- Original attempt: [submissions/0175-combine-two-tables](../../submissions/0175-combine-two-tables/)

## Model Solution

```python
import pandas as pd


def combine_two_tables(person: pd.DataFrame, address: pd.DataFrame) -> pd.DataFrame:
    merged = person.merge(address, on="personId", how="left")
    return merged[["firstName", "lastName", "city", "state"]]
```

## Why This Is The Model

Every person must appear even if there is no matching address row, so the join
must keep the `Person` side. A left join expresses that requirement directly, and
the final column selection puts the result in LeetCode's expected order.

## Invariant

Each row from `person` appears once in the merged result. Address fields are
filled when a matching `personId` exists and null otherwise.

## Complexity

- Time: O(p + a) expected, where `p` is people and `a` is addresses
- Space: O(p + a)

## Review Prompt

What would an inner join do to people who have no address?
