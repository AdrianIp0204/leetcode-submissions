class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        nap = {}
        for i, n in enumerate(nums):
            if n not in nap:
                nap[n] = nap.get(n, i)
            else:
                if abs(i - nap[n]) <= k:
                    return True
                nap[n] = i
        return False
