class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        return False if n<1 else log(n,4).is_integer()
