class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        if len(nums) < 4:
            return []
        res = []
        nums.sort()
        n = len(nums)
        for i in range(n):
            a = nums[i]
            for j in range(i + 1, n):
                b = nums[j]
                for k in range(j + 1, n):
                    c = nums[k]
                    for w in range(k + 1, n):
                        tmp = [a, b, c, nums[w]]
                        tot = sum(tmp)
                        if sum(tmp) == target:
                            if tmp not in res:
                                res.append([a, b, c, nums[w]])
        return res
