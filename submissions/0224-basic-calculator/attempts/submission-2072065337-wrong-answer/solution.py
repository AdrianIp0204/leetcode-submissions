class Solution:
        def calculate(self, s: str) -> int:
            s = s.strip().replace(" ", "")
            tmp = [0]
            neg = False
            for c in s:
                if c == '-':
                    neg = True
                elif c == '(':
                    if neg:
                        tmp.append('-')
                        neg = False
                    tmp.append(0)
                elif c == ')':
                    if tmp[-2] == '-':
                        a = -tmp.pop()
                        tmp.pop()
                        tmp.append(a)
                        
                    tmp.append(tmp.pop()+ tmp.pop())
                elif c.isnumeric():
                    if neg:
                        tmp.append(tmp.pop() - int(c))
                        neg = False
                    else:
                        tmp.append(tmp.pop() + int(c))
            return tmp[0]
