class Solution:
    def findKthPositive(self, arr: list[int], k: int) -> int:
        curr = 0
        now = 0
        l = len(arr)
        for i in range(1, len(arr) + k + 1):
            if curr > len(arr) - 1:
                now += 1
            elif i < arr[curr]:
                now += 1
            else:
                curr += 1
            if now == k:
                return i
