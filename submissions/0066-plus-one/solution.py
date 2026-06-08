class Solution:
    def plusOne(self, n: List[int]) -> List[int]:
        res = []
        c = False
        i = n.pop() + 1
        if i > 9:
            c = True
            res.append(0)
        else:
            res.append(i)
        while n:
            if c:
                i = n.pop() + 1
                if i > 9:
                    res.append(0)
                else:
                    res.append(i)
                    c = False
            else:
                res.append(n.pop())
        if c:
            res.append(1)
        res.reverse()
        return res
