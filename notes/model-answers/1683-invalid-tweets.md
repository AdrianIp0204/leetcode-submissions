# Invalid Tweets

- Pattern: string length filter
- Original attempt: [submissions/1683-invalid-tweets](../../submissions/1683-invalid-tweets/)

## Model Solution

```python
import pandas as pd


def invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:
    return tweets.loc[tweets["content"].str.len() > 15, ["tweet_id"]]
```

## Why This Is The Model

The accepted code uses a direct vectorized string-length check. The result only
needs the tweet identifiers, so the final projection keeps the output narrow.

## Invariant

Each returned row has content length greater than 15, and no shorter tweet id is
included.

## Complexity

- Time: O(n * L), where `L` is average content length
- Space: O(n) for the boolean mask and result

## Review Prompt

What boundary length is still valid and therefore should not be returned?
