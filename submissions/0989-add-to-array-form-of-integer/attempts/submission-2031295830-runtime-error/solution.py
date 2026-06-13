class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        n,c = 0,0
        while num:
            n += num.pop() * 10**c
            c += 1
        n += k
        return [int(i) for i in str(n)]
