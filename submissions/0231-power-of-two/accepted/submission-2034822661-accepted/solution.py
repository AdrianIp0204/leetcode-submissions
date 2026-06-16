class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return False if n <= 0 else 2147483648 % n == 0
