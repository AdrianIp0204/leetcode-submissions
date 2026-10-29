class Solution:
    def fractionToDecimal(self, n: int, d: int) -> str:
        
        quotient, remainder = divmod(n, d)
        if remainder == 0:
            return str(quotient)
        i = 1
        tmp = [str(quotient)]
        nap = {}
        
        while remainder not in nap:
            if remainder == 0:
                return f'{tmp[0]}.{''.join(tmp[1:])}'
            nap[remainder] = i
            i += 1
            quotient, remainder = divmod(remainder * 10, d)
            tmp.append(str(quotient))
        start = nap[remainder]
        return f'{tmp[0]}.{''.join(tmp[1:start])}({''.join(tmp[start:])})'
