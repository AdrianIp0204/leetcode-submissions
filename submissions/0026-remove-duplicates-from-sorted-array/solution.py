class Solution:
    def removeDuplicates(self, n: List[int]) -> int:
        n[:] = sorted(set(n))
        return len(n)
