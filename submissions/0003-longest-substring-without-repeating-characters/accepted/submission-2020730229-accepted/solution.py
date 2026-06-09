class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        elif len(s) == 1:
            return 1
        else:
            c = 0
            tmp = []
            for i in range(0, len(s)):
                for j in range(i, len(s)):
                    if s[j] not in tmp:
                        tmp.append(s[j])
                    else:
                        c = max(c, len(tmp))
                        tmp.clear()
                        break       
            return max(c, len(tmp))
