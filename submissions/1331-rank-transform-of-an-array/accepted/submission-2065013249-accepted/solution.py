class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        nap = {n : i + 1 for i, n in enumerate(sorted(set(arr)))}
        return [nap[n] for n in arr]
