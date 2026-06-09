class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        res = []
        curr = 1
        for x in target:
            while curr < x:
                res.append("Push")
                res.append("Pop")
                curr += 1
            res.append("Push")
            curr += 1
        return res
