class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        l = len(arr)
        freq = [0] * (l + 1)
        res = 1

        for n in arr:
            freq[min(n, l)] += 1

        for i in range(2, l + 1):
            res = min(res + freq[i], i)
        return res
