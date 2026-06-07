class Solution:
    def maxFreqSum(self, s: str) -> int:
        vows = {"a": 0}
        cons = {"z": 0}
        for i in s:
            if i in "aeiou":
                vows[i] = vows.get(i, 0) + 1
            else:
                cons[i] = cons.get(i, 0) + 1
        return max(vows.values()) + max(cons.values())
