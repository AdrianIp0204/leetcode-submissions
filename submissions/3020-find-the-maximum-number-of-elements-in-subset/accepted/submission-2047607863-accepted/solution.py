class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        nap = Counter(nums)
        ans = 1

        if 1 in nap:
            ans = max(ans, nap[1] if nap[1] % 2 else nap[1] - 1)
            del nap[1]

        for x in nap:
            tmp = 1
            cur = x

            while cur * cur in nap and nap[cur] >= 2:
                cur = cur * cur
                tmp += 2

            ans = max(ans, tmp)

        return ans
