class Solution:
    def complexNumberMultiply(self, num1: str, num2: str) -> str:
        n1, n2 = num1[:-1].split('+'), num2[:-1].split('+')
        a, b = int(n1[0]), int(n1[1])
        c, d = int(n2[0]), int(n2[1])
        return f'{a * c + b * -d}+{a * d + b * c}i'
