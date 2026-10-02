class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        SUM = sum(int(i) for i in str(x))
        return -1 if x % SUM else SUM
