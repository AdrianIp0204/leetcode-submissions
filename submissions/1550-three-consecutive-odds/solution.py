class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        for n in range(len(arr)-2):
            if arr[n] % 2 != 0 and arr[n+1] % 2 != 0 and arr[n+2] % 2 != 0:
                return True
        return False
