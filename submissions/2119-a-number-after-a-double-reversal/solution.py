class Solution:
    def isSameAfterReversals(self, n: int) -> bool:
        if n%10==0 and n!=0:
            return False
        return True
