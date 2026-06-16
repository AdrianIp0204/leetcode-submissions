class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        nap = {}
        for n in (set(nums1), set(nums2), set(nums3)):
            for d in n:
                nap[d] = nap.get(d, 0) + 1
        return [k for k, v in nap.items() if v > 1]
