class Solution:
    def maxEqualFreq(self, nums: List[int]) -> int:
        count = defaultdict(int)
        freq_count = defaultdict(int)
        max_freq = 0
        ans = 0

        for i, x in enumerate(nums, 1):
            old_freq = count[x]

            if old_freq > 0:
                freq_count[old_freq] -= 1

            count[x] += 1
            new_freq = count[x]
            freq_count[new_freq] += 1

            max_freq = max(max_freq, new_freq)
            
            if max_freq == 1:
                ans = i
            elif freq_count[1] == 1 and freq_count[max_freq] * max_freq + 1 == i:
                ans = i
            elif freq_count[max_freq] == 1 and freq_count[max_freq - 1] * (max_freq - 1) + max_freq == i:
                ans = i
        return ans
