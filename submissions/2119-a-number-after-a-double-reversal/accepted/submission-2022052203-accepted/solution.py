class Solution:
    def isSameAfterReversals(self, n: int) -> bool:
        return False if n%10==0 and n!=0 else True
