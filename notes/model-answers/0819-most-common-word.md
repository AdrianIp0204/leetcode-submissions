# Most Common Word

- Pattern: normalize, filter, and count
- Original attempt: [submissions/0819-most-common-word](../../submissions/0819-most-common-word/)

## Model Solution

```python
import re


class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        banned_words = set(banned)
        words = re.sub(r"[^a-z]", " ", paragraph.lower()).split()

        counts = {}
        best_word = ""
        best_count = 0

        for word in words:
            if word in banned_words:
                continue

            counts[word] = counts.get(word, 0) + 1
            if counts[word] > best_count:
                best_word = word
                best_count = counts[word]

        return best_word
```

## Why This Is The Model

The solution normalizes case and punctuation before counting, so tokens such as
`"Ball"` and `"ball,"` collapse to the same word. A banned set makes filtering
cheap, and the best answer is updated during the counting pass.

## Invariant

After each non-banned word is processed, `counts` stores exact frequencies for
the words seen so far, and `best_word` has the highest stored count.

## Complexity

- Time: O(n), where `n` is the paragraph length
- Space: O(n)

## Review Prompt

Why is normalization done before the split and count steps?
