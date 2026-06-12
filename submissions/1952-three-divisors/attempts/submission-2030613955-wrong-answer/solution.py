class Solution:
    def isThree(self, n: int) -> bool:
        return False if n < 4 or sqrt(sqrt(n)).is_integer() else sqrt(n).is_integer()
