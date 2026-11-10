class Solution:
    def climbStairs(self, n: int, costs: List[int]) -> int:
        prev1 = costs[0] + 1
        if n == 1:
            return prev1
        prev2 = costs[1] + min(prev1 + 1 ,4)
        if n == 2:
            return prev2
        prev3 = costs[2] + min(prev1 + 4, prev2 + 1, 9)

        for i in range(3, n):
            prev1, prev2, prev3 = prev2, prev3, costs[i] + min(prev1 + 9, prev2 + 4, prev3 + 1)
        return prev3
