class Solution:
    def minOperations(self, nums: list[int], locked: list[int], k: int) -> int:

        n = len(nums)
        correct = range(1, n+1)

        unlocks = 0
        need_swap = 0
        MIN, MAX = float('inf'), float('-inf')

        
        for i in range(n):
            for j in range(i+1, n):
                if nums[j] < nums[i]:
                    need_swap += 1
                    MIN = min(MIN ,nums[j], nums[i])
                    MAX = max(MAX ,nums[j], nums[i])

        if MIN == float('inf') and MAX == float('-inf'):
            return 0
        
        for i in range(MIN-1, MAX):
            if locked[i] == 1:
                unlocks += 1
                if unlocks > k:
                    return -1
                
        return need_swap + unlocks
