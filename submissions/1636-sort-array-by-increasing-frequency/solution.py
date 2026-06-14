class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        nap = Counter(nums)
        nap = dict(sorted(nap.items(), key=lambda x:(x[1], -x[0])))
        res = []
        for k, v in nap.items():
            res.extend([k]*v)
        return res
