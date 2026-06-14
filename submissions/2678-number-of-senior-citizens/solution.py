class Solution:
    def countSeniors(self, details: List[str]) -> int:
        res = 0
        for d in details:
            if int(d[11]) * 10 + int(d[12]) > 60:
                res += 1
        return res
