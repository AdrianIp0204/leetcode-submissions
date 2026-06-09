class Solution:
    def recoverOrder(self, o: List[int], f: List[int]) -> List[int]:
        return [i for i in o if i in f]
