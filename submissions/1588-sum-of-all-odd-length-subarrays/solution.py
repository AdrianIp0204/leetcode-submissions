class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        l = len(arr)
        res = sum(arr)
        if l == 1 or l ==2:
            return res
        for i in range(2, l, 2):
            for j in range(i, l):
                for k in range(i+1):
                    res += arr[j-k]
        return res
