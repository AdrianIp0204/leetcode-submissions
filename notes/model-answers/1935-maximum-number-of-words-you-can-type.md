# Maximum Number of Words You Can Type

- Pattern: word scan + forbidden characters
- Original attempt: [submissions/1935-maximum-number-of-words-you-can-type](../../submissions/1935-maximum-number-of-words-you-can-type/)

## Model Solution

```python
class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        words = text.split()
        ans = 0
        for word in words:
            for letter in brokenLetters:
                if letter in word:
                    ans -= 1
                    break
            ans += 1
        return ans
```

## Why This Is The Model

The accepted solution starts by treating each word as typeable, then cancels that word once if it contains any broken letter.

## Invariant or Proof Idea

Every word contributes `1` unless the inner scan finds a broken letter, in which case the temporary `-1` offsets the final increment.

## Complexity

- Time: O(w * b * m), where `w` is words, `b` is broken letters, and `m` is word length for membership checks
- Space: O(w) for the split words

## Review Prompt

How would converting `brokenLetters` to a set change the membership work?
