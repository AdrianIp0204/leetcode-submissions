class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        cap = Counter(nums)
        m = max(cap.values())
        return sum(v for k, v in cap.items() if v == m)
