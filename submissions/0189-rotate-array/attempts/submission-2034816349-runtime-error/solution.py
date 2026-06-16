class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nopy = nums.copy()
        for i in range(len(nums)):
            nums[i] = nopy[i-k]
