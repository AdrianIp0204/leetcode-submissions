from collections import Counter
class Solution:
    def majorityElement(self, nums: list[int]) -> list[int]:
        num = len(nums) // 3
        res = []
        for k, v in Counter(nums).items():
            if v > num:
                res.append(k)
        return res
