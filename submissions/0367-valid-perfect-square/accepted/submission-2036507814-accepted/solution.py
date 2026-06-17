class Solution:
    def isPerfectSquare(self, n: int) -> bool:
        if n == 1:
            return True
        L = 2
        R = n//2
        while L <= R:
            mid = L + ((R - L) // 2)
            sq = mid * mid
            if sq == n:
                return True
            elif sq < n:
                L = mid + 1
            else:
                R = mid - 1
        return False
