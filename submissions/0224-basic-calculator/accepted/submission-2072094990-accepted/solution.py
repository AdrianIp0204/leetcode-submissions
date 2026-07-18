class Solution:
    def calculate(self, s: str) -> int:
        s = s.strip().replace(" ", "")
        tmp = [0]
        neg = False
        l = len(s) - 1

        for i, c in enumerate(s):
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

                tmp.append(tmp.pop() + tmp.pop())

            elif c.isnumeric():
                
                if i == 0 or not s[i - 1].isnumeric():
                    
                    if i != l and s[i + 1].isnumeric():
                        tmp.append(int(c))
                    elif neg:
                        tmp[-1] -= int(c)
                        neg = False
                    else:
                        tmp[-1] += int(c)

                
                else:
                    num = tmp.pop() * 10 + int(c)

                    if i != l and s[i + 1].isnumeric():
                        tmp.append(num)
                    elif neg:
                        tmp[-1] -= num
                        neg = False
                    else:
                        tmp[-1] += num

        return tmp[0]
