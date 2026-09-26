class Solution:
    def evaluate(self, s: str, knowledge: list[list[str]]) -> str:
        start = 0
        append = True
        res = []
        tmp = []
        mapp = {d[0]: d[1] for d in knowledge}
        for c in s:
            if c == '(':
                append = False
            elif c == ')':
                name = ''.join(tmp) 
                res.append(mapp.get(name,'?'))
                tmp = []
                append = True


            else:
                if append:
                    res.append(c)
                else:
                    tmp.append(c)
        return ''.join(res)
