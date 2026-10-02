# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        l, r = 1, n

        while True:
            curr = (l + r) // 2
            now = isBadVersion(curr)
            if l == r:
                break
            elif now:
                r = curr
            else:
                l = curr + 1

        return l
