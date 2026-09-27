class Solution:
    def restoreIpAddresses(self, s: str) -> list[str]:
        res = []
        l = len(s)
        def backtrack(path, index, position):
            if index == l and position == 4:
                res.append('.'.join(path.copy()))
                return

            for i in range(index + 1, index + 4):
                tmp = s[index:i]
                if tmp != '' and not (tmp.startswith('0') and len(tmp) != 1):
                    if int(tmp) <= 255:
                        path.append(tmp)
                        backtrack(path, i, position + 1)
                        path.pop()
        backtrack([],0,0)
        return res
