class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        if k % 2 == 0 or k % 5 == 0 or k % 7 == 0:
            return -1
        elif k % 3 == 0:
            return int(k/3 * 3)
        else:
            return len(list(str(k)))
