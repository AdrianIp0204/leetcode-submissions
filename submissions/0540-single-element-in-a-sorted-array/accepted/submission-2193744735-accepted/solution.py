class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        n = len(nums) - 1
        left, right = 0, n
        while left <= right:
            mid = (left+right)//2
            if mid & 1:
                if nums[mid] != nums[mid-1]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if mid == n:
                    return nums[-1]
                if nums[mid] != nums[mid+1]:
                    right = mid - 1
                else:
                    left = mid + 1
        return nums[left]
