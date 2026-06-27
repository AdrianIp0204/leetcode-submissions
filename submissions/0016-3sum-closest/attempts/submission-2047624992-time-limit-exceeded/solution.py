class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        l = len(nums)
        dist = float('inf')
        ans = 0
        for i in range(l):
            for j in range(l):
                if i != j:
                    for k in range(l):
                        if j != k and i != k:
                            SUM = nums[i] + nums[j] + nums[k]
                            tmp = abs(SUM - target)
                            if tmp < dist:
                                ans = SUM
                                dist = tmp
        return ans
