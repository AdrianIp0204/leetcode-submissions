class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        cn1, cn2 = Counter(nums1), Counter(nums2)
        for k, v in cn1.items():
            if k in cn2:
                res.extend([k] * min(v, cn2[k]))
        return res
