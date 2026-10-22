class Solution:
    def countAndSay(self, n: int) -> str:
        def do(s):
            count = 1
            tmp = []
            for i in range(1, len(s)):
                if s[i] == s[i-1]:
                    count += 1
                else:
                    tmp.append(str(count)+str(s[i-1]))
                    count = 1
            tmp.append(str(count)+str(s[-1]))
            return ''.join(tmp)
        curr = '1'
        for _ in range(n-1):
            curr = do(curr)
        return curr
