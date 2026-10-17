class Solution:
    def minOperations(self, boxes: str) -> list[int]:
        res = []
        for i in range(len(boxes)):
            steps = 0
            for j, n in enumerate(boxes):
                if i != j and n == '1':
                    steps += abs(j - i)
            res.append(steps)
        return res
