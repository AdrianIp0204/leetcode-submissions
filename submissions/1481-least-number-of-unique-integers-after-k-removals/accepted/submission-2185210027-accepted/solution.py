class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        counts = Counter(arr)
        res = len(counts)
        heap = list(counts.values())
        heapify(heap)
        while heap and heap[0] <= k:
            res -= 1
            k -= heappop(heap)
        return res
