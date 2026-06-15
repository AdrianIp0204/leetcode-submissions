# Unique Morse Code Words

- Pattern: set of transformed strings
- Original attempt: [submissions/0804-unique-morse-code-words](../../submissions/0804-unique-morse-code-words/)

## Model Solution

```python
class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        codes = [
            ".-", "-...", "-.-.", "-..", ".", "..-.", "--.",
            "....", "..", ".---", "-.-", ".-..", "--", "-.",
            "---", ".--.", "--.-", ".-.", "...", "-", "..-",
            "...-", ".--", "-..-", "-.--", "--..",
        ]

        seen = set()
        for word in words:
            seen.add("".join(codes[ord(ch) - ord("a")] for ch in word))
        return len(seen)
```

## Why This Is The Model

The transformation of each word is deterministic, so a set naturally removes
duplicates after conversion.

## Invariant

After each word, `seen` contains exactly the distinct transformations processed
so far.

## Complexity

- Time: O(total characters)
- Space: O(number of words * transformed length)

## Review Prompt

Why should the joined transformation, not each individual letter code, go into
the set?
