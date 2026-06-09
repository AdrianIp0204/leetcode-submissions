class Solution:
    def minimumSum(self, num: int) -> int:
        norm = [int(s) for s in str(num) if s != "0"]
        if len(norm) < 3:
            return sum(norm)
        norm.sort()
        if len(norm) == 3:
            return norm[0]*10 + norm[1] + norm[2]
        return norm[0]*10 + norm[1]*10 + norm[2] + norm[3]
