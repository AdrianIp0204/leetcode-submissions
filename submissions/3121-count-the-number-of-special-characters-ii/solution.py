class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        seen = set()
        special = set()
        for w in word:
            if w not in seen:
                if w.isupper():
                    if w.lower() in seen:
                        special.add(w.lower())
                    else:
                        seen.add(w.lower())
                    seen.add(w)
                else:
                    seen.add(w)
            elif w in special:
                special.remove(w)
        return len(special)
