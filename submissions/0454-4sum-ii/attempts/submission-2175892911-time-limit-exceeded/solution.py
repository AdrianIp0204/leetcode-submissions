from collections import Counter
class Solution:
    def fourSumCount(self, nums1: list[int], nums2: list[int], nums3: list[int], nums4: list[int]) -> int:
        res = 0
        nums2, nums3, nums4 = Counter(nums2), Counter(nums3), Counter(nums4)
        for target in nums1:
            for k1, v1 in nums2.items():
                for k2, v2 in nums3.items():
                    for k3, v3 in nums4.items():
                        if k1 + k2 + k3 == - target:
                            res += v1 * v2 * v3
        return res
