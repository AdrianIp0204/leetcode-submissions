class Solution:
    def hammingWeight(self, n: int) -> int:
        return sum(1 for d in f"{n:0b}" if d=="1")
