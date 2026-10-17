class Solution:
    def maxSumOfSquares(self, num: int, sum: int) -> str:
        if sum >= pow(10, num):
            return ''
        res = []

        curr_sum = 0
        for _ in range(num):
            for i in range(9, -1, -1):
                if curr_sum + i <= sum:
                    curr_sum += i
                    res.append(str(i))
                    break
        return ''.join(res)
