class Solution:
    def smallestDivisor(self, nums: List[int], t: int) -> int:
        l = min(nums)
        r = max(nums)
        mid = 0
        while l < r:
            mid = l + (r-l)//2
            s = 0
            for n in nums:
                s += ceil(n/mid)
            if s > t: 
                l = mid + 1
            elif s < t:
                r = mid
        print(l, mid, r)
        return l
