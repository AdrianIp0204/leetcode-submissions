class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        return any((2*n in arr and n!=0) or (arr.count(0)>=2) for n in arr)
