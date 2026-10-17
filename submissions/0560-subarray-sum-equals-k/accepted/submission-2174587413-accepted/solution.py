class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        res = 0
        curr = 0
        freq = {0:1}

        for n in nums:
            curr += n
            target = curr - k
            res += freq.get(target, 0)
            freq[curr] = freq.get(curr, 0) + 1

        return res
