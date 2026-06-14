# Weighted Word Mapping

- Pattern: character weight lookup + modulo mapping
- Original attempt: [submissions/3838-weighted-word-mapping](../../submissions/3838-weighted-word-mapping/)

## Model Solution

```python
import string
class Solution:
    def mapWordWeights(self, words: List[str], weights: List[int]) -> str:
        az_list = list(string.ascii_lowercase)
        wap = {i:j for i, j in zip(az_list, weights)}
        res = []
        for w in words:
            tmp = 0
            for c in w:
                tmp += wap[c]
            tmp %= 26
            res.append(chr(122 - tmp%26))
        return "".join(res)
```

## Why This Is The Model

The accepted solution separates alphabet setup, per-word scoring, and final character conversion, which makes the contest-specific rule readable.

## Invariant or Proof Idea

After processing a word, `tmp` is the sum of that word's character weights modulo 26 before it is converted to the output letter.

## Complexity

- Time: O(total characters + 26)
- Space: O(26 + number of words)

## Review Prompt

Why is the score reduced modulo 26 before producing a character?
