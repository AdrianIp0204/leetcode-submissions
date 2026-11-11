class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        net = set()
        MIN = float('inf')
        for n in nums:
            if n > 0:
                net.add(n)
                MIN = min(MIN, n)
        if not net or (MIN != float('inf') and MIN > 1):
            return 1
        while MIN + 1 in net:
            MIN += 1
        return MIN + 1
