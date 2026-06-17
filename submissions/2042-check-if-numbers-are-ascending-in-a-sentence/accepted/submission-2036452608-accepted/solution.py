class Solution:
    def areNumbersAscending(self, s: str) -> bool:
        wist = s.split()
        c = -1
        for w in wist:
            if w.isdigit():
                if int(w) <= c:
                    return False
                c = int(w)
        return True
