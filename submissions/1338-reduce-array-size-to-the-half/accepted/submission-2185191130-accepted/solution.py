class Solution:
    def minSetSize(self, arr: list[int]) -> int:
        n = len(arr) // 2
        tmp = [-i for i in Counter(arr).values()]
        heapify(tmp)
        curr = 0
        res = 0
        while curr < n:
            curr += -heappop(tmp)
            res += 1
        return res
