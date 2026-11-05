class Solution:
    def findTheDistanceValue(self, arr1: list[int], arr2: list[int], d: int) -> int:
        return sum(1 for n1 in arr1 if all(abs(n1-n2)>d for n2 in arr2))
