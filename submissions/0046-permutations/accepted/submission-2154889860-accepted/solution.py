class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        res = []
        numbers = set(nums)
        def backtrack(path):
            if len(path) == len(nums):
                res.append(path.copy())
                return

            for n in numbers.copy():
                path.append(n)
                numbers.remove(n)
                backtrack(path)
                numbers.add(n)
                path.pop()

        for i in nums:
            numbers.remove(i)
            backtrack([i])
            numbers.add(i)
        
        return res
