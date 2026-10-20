from math import floor
class Solution:
    def calculate(self, s: str) -> int:
        s = s.replace(' ', '')

        n = 0
        tmp = []
        tmp2 = []
        tmp3 = []

        for c in s:
            if c.isnumeric():
                n = n * 10 + int(c)
            else:
                tmp.append(n)
                n = 0
                tmp.append(c)
        tmp.append(n)

        for i, c in enumerate(tmp):
            if i > 0 and tmp2[-1] == '*':
                tmp2.pop()
                tmp2.append(tmp2.pop() * c)
            elif i > 0 and tmp2[-1] == '/':
                tmp2.pop()
                tmp2.append(floor(tmp2.pop() / c))
            else:
                tmp2.append(c)

        for i, c in enumerate(tmp2):
            if i > 0 and tmp3[-1] == '-':
                tmp3.pop()
                tmp3.append(tmp3.pop() - c)
            elif c != '+':
                tmp3.append(c)

        return sum(tmp3)
