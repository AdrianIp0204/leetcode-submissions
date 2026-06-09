import math

class Solution:
    def isPalindrome(self, x: int) -> bool:

        if x == 0:
            output = True
        else:
            x_abs = abs(x)
            power = int(math.log(x_abs, 10))
            x_list = []
            new_list =[]

            for i in range(power+1):
                a = 0
                a = x_abs // (10 ** (power - i))
                x_list.append(a)

            for i in range(len(x_list)):
                if i == 0:
                    new_list.append(x_list[0])
                else:
                    new = x_list[i] - x_list[i-1] * 10
                    new_list.append(new)
            
            reversed_list = new_list[::-1]
            
            if new_list == reversed_list and x > 0:
                output = True
            else:
                output = False
    
        
        return output
