import math
class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        if left <= 2 and right >= 3:
            return [2, 3]

        def is_prime(n):
            if n < 2:
                return False
            if n == 2:
                return True
            if n % 2 == 0:
                return False

            for i in range(3, int(math.sqrt(n)) + 1, 2):
                if n % i == 0:
                    return False

            return True

        if left % 2 == 0:
            left += 1

        prev = None
        best_diff = float("inf")
        ans = [-1, -1]

        for num in range(left, right + 1, 2):
            if is_prime(num):
                if prev is not None:
                    diff = num - prev

                    if diff < best_diff:
                        best_diff = diff
                        ans = [prev, num]

                        if diff == 2:
                            return ans

                prev = num

        return ans
