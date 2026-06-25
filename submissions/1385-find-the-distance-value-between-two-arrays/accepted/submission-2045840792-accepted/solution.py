class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        arr2.sort()
        c = 0
        for n in arr1:
            l = bisect_left(arr2, n - d)
            r = bisect_right(arr2, n + d)

            if l == r:
                c += 1
        return c
