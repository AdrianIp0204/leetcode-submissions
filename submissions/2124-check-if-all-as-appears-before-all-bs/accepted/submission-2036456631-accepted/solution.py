class Solution:
    def checkString(self, s: str) -> bool:
        B = False
        for c in s:
            if B:
                if c == "a":
                    return False
            else:
                if c == "b":
                    B = True
        return True
