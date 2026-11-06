class Solution:
    def threeFibonacciSum(self, n: int) -> bool:
        if n % 2:
            return False
        n1, n2, n3 = 0, 1, 1
        while n3 < n:
            n1, n2, n3 = n2, n3, n1 + n2
        if n3 == n:
            return True
        return False
