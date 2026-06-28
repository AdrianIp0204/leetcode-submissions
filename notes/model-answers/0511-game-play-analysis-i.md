# Game Play Analysis I

- Pattern: group by / minimum aggregate
- Original attempt: [submissions/0511-game-play-analysis-i](../../submissions/0511-game-play-analysis-i/)

## Model Solution

```python
import pandas as pd


def game_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    first_login = (
        activity.groupby("player_id", as_index=False)["event_date"]
        .min()
        .rename(columns={"event_date": "first_login"})
    )
    return first_login
```

## Why This Is The Model

The accepted code groups by player and takes the minimum event date. Using
`as_index=False` keeps `player_id` as a normal result column and makes the final
shape explicit.

## Invariant

Each output row represents exactly one `player_id`, and `first_login` is the
minimum `event_date` among that player's rows.

## Complexity

- Time: O(n)
- Space: O(p), where `p` is the number of players

## Review Prompt

Why does the aggregation need to happen per player instead of over the whole
table?
