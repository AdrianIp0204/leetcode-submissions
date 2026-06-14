class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        l = len(nums) - 1
        mid = 1
        res = []
        while mid < l:
            left = 0
            right = l
            target = -nums[mid]
            while left < mid < right:
                numL = nums[left]
                numR = nums[right]
                total = numL + numR
                if total < target:
                    left += 1
                    if left == mid:
                        break
                elif total > target:
                    right -= 1
                    if right == mid:
                        break
                else:
                    res.append([numL, -target, numR])
                    break        
            mid += 1
        return res
