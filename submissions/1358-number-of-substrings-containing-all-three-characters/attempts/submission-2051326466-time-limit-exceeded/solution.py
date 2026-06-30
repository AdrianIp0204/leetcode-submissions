class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        n = len(s)
        res = 0
        for i in range(n-2):
            l = i + 2
            seen = set([s[i], s[i+1], s[i+2]])
            while len(seen) != 3:
                l += 1
                if l == n:
                    break
                seen.add(s[l])
            else:
                res += n - l
        return res
