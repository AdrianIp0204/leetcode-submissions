class Solution:
    def processQueries(self, queries: list[int], m: int) -> list[int]:
        nums = list(range(m, 0, - 1))
        res = []
        for q in queries:
            for i in range(m-1, -1, -1):
                if nums[i] == q:
                    res.append(m-i-1)
                    nums.pop(i)
                    break
            nums.append(q)
        return res
