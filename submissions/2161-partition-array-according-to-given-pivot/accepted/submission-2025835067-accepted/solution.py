class Solution:
    def pivotArray(self, nums: List[int], piv: int) -> List[int]:
        small, pi, big = [], [], []
        for n in nums:
            if n < piv:
                small.append(n)
            elif n > piv:
                big.append(n)
            else:
                pi.append(n)
        return small + pi + big
