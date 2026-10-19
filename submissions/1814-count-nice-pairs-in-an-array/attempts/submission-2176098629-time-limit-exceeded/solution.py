class Solution:
    def countNicePairs(self, nums: list[int]) -> int:
        nap = Counter(nums)
        n = len(nap)
        nums = list(nap.keys())
        res = 0

        def rev(num):
            res = 0

            while num % 10 == 0:
                num //= 10

            while num:
                res = res*10 + num % 10
                num //= 10
            
            return res

        for i in range(n):
            for j in range(i + 1, n):
                rev1, rev2 = rev(nums[i]), rev(nums[j])
                if nums[i] + rev2 == rev1 + nums[j]:
                    res += nap[nums[i]] * nap[nums[j]]

        return res % 1000000007
