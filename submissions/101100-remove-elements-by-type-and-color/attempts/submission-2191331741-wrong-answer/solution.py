class Solution:
    def canRemoveAll(self, types: list[int], colors: list[int], groupSize: list[int]) -> bool:
        mapp = defaultdict(int)
        for type, color in zip(types, colors):
            mapp[(type, color)] += 1

        if len(mapp) != len(groupSize):
            return False

        if list(sorted(mapp.values())) != list(sorted(groupSize)):
            return False
        return True
