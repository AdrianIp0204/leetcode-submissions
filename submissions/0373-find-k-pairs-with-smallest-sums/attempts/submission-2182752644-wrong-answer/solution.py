class Solution:
    def kSmallestPairs(self, nums1: list[int], nums2: list[int], k: int) -> list[list[int]]:
        p1, p2 = 0, 0
        n1, n2 = len(nums1) - 1, len(nums2) - 1
        res = []
        while len(res) < k and p1 <= n1 and p2 <= n2:
            a, b = nums1[p1], nums2[p2]

            if a < b:
                p2 += 1
            else:
                p1 += 1
            res.append([a, b])

        
        while len(res) < k and p1 < n1:
            res.append([nums1[p1], nums2[n2]])
            p1 += 1

        while len(res) < k and p2 < n2:
            res.append([nums1[n1], nums2[p2]])
            p2 += 1

        return res
