class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        nap = Counter(nums)
        res = 0
        for k, v in nap.items():
            if v == 1:
                res += k
        return res
