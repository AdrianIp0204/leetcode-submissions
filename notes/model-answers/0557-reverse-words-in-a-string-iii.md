# Reverse Words in a String III

- Pattern: split + reverse each token
- Original attempt: [submissions/0557-reverse-words-in-a-string-iii](../../submissions/0557-reverse-words-in-a-string-iii/)

## Model Solution

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()
        for i in range(len(words)):
            words[i] = words[i][::-1]
        return " ".join(words)
```

## Why This Is The Model

The accepted solution separates the sentence into words, reverses each word locally, and rejoins the words in the same order.

## Invariant or Proof Idea

After processing index `i`, every word before or at `i` has its characters reversed while the word order is unchanged.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

What spacing assumption does `split()` plus `" ".join(...)` make?
