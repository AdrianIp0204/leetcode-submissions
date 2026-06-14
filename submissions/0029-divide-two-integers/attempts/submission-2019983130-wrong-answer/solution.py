class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if dividend == 0:
            return 0
        elif divisor == 1:
            return dividend
        elif divisor == -1:
            return -dividend
        else:
            neg = False
            quotient = 0
            if dividend < 0 or divisor < 0:
                neg = True
            if dividend < 0 and divisor < 0:
                neg = False

            dividend, divisor = abs(dividend), abs(divisor)
            while dividend > divisor:
                dividend = dividend - divisor
                quotient += 1

            if neg is True:
                quotient = -quotient

            return quotient
