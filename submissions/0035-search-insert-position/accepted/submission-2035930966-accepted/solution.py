class Solution:
    def searchInsert(self, n: List[int], t: int) -> int:
        L = 0
        R = len(n) - 1
        while R >= L:
            mid = L + ((R-L)//2)
            if n[mid] == t:
                return mid
            elif n[mid] < t:
                L = mid + 1
            else:
                R = mid - 1
        return L
