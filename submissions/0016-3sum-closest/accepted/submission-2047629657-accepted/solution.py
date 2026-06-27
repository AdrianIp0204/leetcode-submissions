class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        ans = nums[0] + nums[1] + nums[2]
        n = len(nums)
        for i in range(n - 2):
            l, r = i + 1, n - 1
            while l < r:
                tot = nums[i] + nums[l] + nums[r]
                if abs(target - tot) < abs(target - ans):
                    ans = tot
                
                if tot == target:
                    return target
                elif tot < target:
                    l += 1
                else: 
                    r -= 1
        return ans
