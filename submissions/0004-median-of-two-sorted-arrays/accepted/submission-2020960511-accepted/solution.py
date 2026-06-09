class Solution:
    def findMedianSortedArrays(self, n: List[int], m: List[int]) -> float:
        num = n + m
        num.sort()
        l = len(num)
        l2 = l // 2
        if l % 2 == 0:
            return (num[l2] + num[l2 - 1]) / 2
        else:
            return num[l2]
