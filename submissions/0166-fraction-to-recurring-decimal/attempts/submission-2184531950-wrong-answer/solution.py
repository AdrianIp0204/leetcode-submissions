class Solution:
    def fractionToDecimal(self, n: int, d: int) -> str:
        
        
        i = 1

        neg = (n < 0 or d < 0) and not(n < 0 and d < 0)
        quotient, remainder = divmod(abs(n), abs(d))
        
        if remainder == 0:
            return str(-quotient) if neg else str(quotient)

        tmp = [str(quotient)]
        nap = {}
        
        while remainder not in nap:
            if remainder == 0:
                return f'-{tmp[0]}.{"".join(tmp[1:])}' if neg else f'{tmp[0]}.{"".join(tmp[1:])}'
            nap[remainder] = i
            i += 1
            quotient, remainder = divmod(remainder * 10, d)
            tmp.append(str(quotient))
        start = nap[remainder]
        return f'-{tmp[0]}.{"".join(tmp[1:start])}({"".join(tmp[start:])})' if neg else f'{tmp[0]}.{"".join(tmp[1:start])}({"".join(tmp[start:])})'
