class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        res = 0
        l = len(nums)
        for i in range(l):
            tmp = []
            t = 0
            for j in range(i, l):
                tmp.append(nums[j])
                if nums[j] == target:
                    t += 1
                if t > len(tmp) * 0.5:
                    res += 1
        return res
