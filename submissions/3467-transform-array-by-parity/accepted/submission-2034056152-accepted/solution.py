from collections import deque
class Solution:
    def transformArray(self, nums: List[int]) -> List[int]:
        res = deque()
        for n in nums:
            if n % 2:
                res.append(1)
            else:
                res.appendleft(0)
        return list(res)
