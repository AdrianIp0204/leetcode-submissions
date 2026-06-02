class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        arr.sort()
        diff = arr[-1] - arr[-2]
        for i, num in enumerate(arr):
            if i != len(arr) - 1:
                if arr[i+1] - num != diff:
                    return False
        return True
        
        print(arr, diff)
