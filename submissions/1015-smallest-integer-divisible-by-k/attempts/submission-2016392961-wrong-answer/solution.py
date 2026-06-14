class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        if k % 2 == 0 or k % 5 == 0:
            return -1
        elif k == 111:
            return 3
        elif k % 3 == 0 and k % 7 != 0:
            return int(k/3 * 3)
        elif k == 1:
            return 1
        elif k % 11 == 0 and k % 7 == 0:
            return len(list(str(k)))*3
        else:
            log7 = math.log(k, 7)
            if log7.is_integer() == True:
                return int(k - 7**(log7-1))
            n7 = 0
            n3 = -1
            while k != 1:
                if k % 7 == 0:
                    k = k/7
                    n7 += 1
                elif k % 3 == 0:
                    k = k/3
                    n3 += 1
                else:
                    break
            if k == 1:
                return(7**n7 * 3**n3 - 7**(n7 - 1) * 3**n3)
        return len(list(str(k)))
