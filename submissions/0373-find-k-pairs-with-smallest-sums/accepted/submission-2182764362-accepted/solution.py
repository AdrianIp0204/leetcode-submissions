
from heapq import heapify, heappop
class Solution:
    def kSmallestPairs(self, nums1: list[int], nums2: list[int], k: int) -> list[list[int]]:
        if not nums1 or not nums2:
            return []

        heap = []
        for i in range(min(len(nums1), k)):
            heap.append((nums1[i] + nums2[0], i, 0))
        heapify(heap)
        
        res = []
        while heap and len(res) < k:
            _, i, j = heappop(heap)
            res.append([nums1[i], nums2[j]])

            if j + 1 < len(nums2):
                heappush(heap, (nums1[i] + nums2[j+1], i, j+1))

        return res
