import math

class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        elif x < 10:
            return True
        else:
            x_list = list(str(x))
            x_reverse = x_list[::-1]
            if x_reverse == x_list:
                return True
            return False
