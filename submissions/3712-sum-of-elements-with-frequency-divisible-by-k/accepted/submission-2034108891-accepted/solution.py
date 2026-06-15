class Solution:
    def sumDivisibleByK(self, nums: List[int], k: int) -> int:
        return sum(i*v for i,v in Counter(nums).items() if v%k==0)
