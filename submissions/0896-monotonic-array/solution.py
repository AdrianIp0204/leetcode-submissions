class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        l = len(nums)
        if l < 3:
            return True
        greater = None
        prev = nums.pop()
        curr = 0
        while nums:
            if prev == nums[-1]:
                pass
            elif prev > nums[-1]:
                if greater is False:
                    return False
                elif greater is None:
                    greater = True
            else:
                if greater is True:
                    return False
                elif greater is None:
                    greater = False
            prev = nums.pop()
        return True
