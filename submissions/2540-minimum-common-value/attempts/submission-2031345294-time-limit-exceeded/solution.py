class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        for n in nums1:
            if n in nums2:
                return n
        return -1
