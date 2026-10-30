class Solution:
    def getFolderNames(self, names: list[str]) -> list[str]:
        wap = {}
        res = []

        for name in names:
            if name not in wap:
                wap[name] = 1
                res.append(name)
            else:
                k = wap[name]
                new = f'{name}({k})'

                while new in wap:
                    k += 1
                    new = f'{name}({k})'

                wap[name] = k + 1
                wap[new] = 1
                res.append(new)
            
        return res
