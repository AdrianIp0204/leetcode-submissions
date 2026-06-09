class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nu = {}
        for n in nums:
            nu[n] = nu.get(n, 0) + 1
            if nu.get(n) > 1:
                return True
        return False
