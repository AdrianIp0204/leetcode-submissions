class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        key = key.replace(' ', '')
        curr = 97
        wap = {}
        for c in key:
            if c not in wap:
                wap[c] = chr(curr)
                curr += 1
                if curr > 122:
                    break
        tmp = []
        for c in message:
            if c == ' ':
                tmp.append(' ')
            else:
                tmp.append(wap[c])
        return ''.join(tmp)
