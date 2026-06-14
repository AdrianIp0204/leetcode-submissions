class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ans1, ans2 = 0, 0
        for n in nums1:
            if n in nums2:
                ans1 += 1
        for n in nums2:
            if n in nums1:
                ans2 += 1
        return [ans1, ans2]
