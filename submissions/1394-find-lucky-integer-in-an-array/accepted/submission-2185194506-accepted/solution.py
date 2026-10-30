class Solution:
    def findLucky(self, arr: list[int]) -> int:
        arr = Counter(arr)
        tmp = []
        heapify(tmp)
        for k, v in arr.items():
            if k == v:
                heappush(tmp, -k)
        return -tmp[0] if tmp else -1
