# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        l = 1
        r = n
        while True:
            curr = (l + r) // 2
            now = guess(curr)
            if now == 0:
                break
            elif now == -1:
                r = curr - 1
            else:
                l = curr + 1
        return curr
