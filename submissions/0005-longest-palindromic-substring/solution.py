class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s

        ml = 1
        ms = s[0]
        for i in range(len(s)-1):
            for j in range(i+1,len(s)):
                if j-i+1 > ml and s[i:j+1] == s[i:j+1][::-1]:
                    ml = j-i+1
                    ms = s[i:j+1]

        return ms
