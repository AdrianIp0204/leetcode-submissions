class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        return sorted(set([i[0]*100 + i[1]*10 + i[2] for i in list(permutations(digits, 3)) if i[2]%2 == 0 and i[0] != 0]))
