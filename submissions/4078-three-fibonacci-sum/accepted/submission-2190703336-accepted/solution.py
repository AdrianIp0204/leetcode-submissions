class Solution:
    def threeFibonacciSum(self, n: int) -> bool:
        if n % 2:
            return False
        n1, n2, n3 = 0, 1, 1
        while n1 <= n:
            if n1 + n2 + n3 == n:
                return True
            n1, n2, n3 = n2, n3, n2 + n3        
        return False
