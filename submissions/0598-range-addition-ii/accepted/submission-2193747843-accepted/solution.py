class Solution:
    def maxCount(self, m: int, n: int, ops: list[list[int]]) -> int:
        return m * n if not ops else min(ops)[0] * min(ops, key=lambda x: x[1])[1]
