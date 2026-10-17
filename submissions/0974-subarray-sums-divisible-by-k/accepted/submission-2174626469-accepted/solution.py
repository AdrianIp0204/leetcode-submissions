class Solution:
    def subarraysDivByK(self, nums: list[int], k: int) -> int:
        res = 0
        curr = 0
        freq = {0:1}
        for n in nums:
            curr += n
            curr %= k
            res += freq.get(curr, 0)
            freq[curr] = freq.get(curr, 0) + 1
        return res
