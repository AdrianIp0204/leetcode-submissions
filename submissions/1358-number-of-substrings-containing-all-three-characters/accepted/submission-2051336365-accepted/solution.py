class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        n = len(s)
        freq = [0] * 3
        l, res = 0, 0

        for r in range(n):
            freq[ord(s[r]) - 97] += 1

            while freq[0] and freq[1] and freq[2]:
                res += n - r
                freq[ord(s[l]) - 97] -= 1
                l += 1 
        return res
