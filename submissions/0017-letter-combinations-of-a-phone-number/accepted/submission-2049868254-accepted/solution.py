class Solution:
    def letterCombinations(self, d: str) -> List[str]:
        nap = {
            '2' : 'abc',
            '3' : 'def',
            '4' : 'ghi',
            '5' : 'jkl',
            '6' : 'mno', 
            '7' : 'pqrs',
            '8' : 'tuv',
            '9' : 'wxyz'
        }
        res = []
        if len(d) == 1:
            return [a for a in nap[d]]
        elif len(d) == 2:
            a0, a1 = d[0], d[1]
            for a in nap[a0]:
                for b in nap[a1]:
                    res.append(f"{a}{b}")
            return res
        elif len(d) == 3:
            a0, a1, a2 = d[0], d[1], d[2]
            for a in nap[a0]:
                for b in nap[a1]:
                    for c in nap[a2]:
                        res.append(f"{a}{b}{c}")
            return res
        else:
            a0, a1, a2, a3 = d[0], d[1], d[2], d[3]
            for a in nap[a0]:
                for b in nap[a1]:
                    for c in nap[a2]:
                        for d in nap[a3]:
                            res.append(f"{a}{b}{c}{d}")
            return res
