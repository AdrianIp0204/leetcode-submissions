class Solution:
    def addDigits(self, num: int) -> int:
        if num == 9:
            return 9
        elif num % 9 == 0:
            return 0
        else:
            return num % 9
