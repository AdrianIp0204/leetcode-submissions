class Solution:
    def decodeString(self, s: str) -> str:
        tmp = ['']
        times = []
        tmp_times = 0
        for i, c in enumerate(s):
            if c == '[':
                tmp.append('')
                times.append(tmp_times)
                tmp_times = 0
            elif c == ']':
                last = tmp.pop()
                tmp.append(tmp.pop() + last * times.pop())
                
            elif c.isnumeric():
                tmp_times = tmp_times * 10 + int(c)
            else:
                tmp.append(tmp.pop() + c)
        return ''.join(tmp)
