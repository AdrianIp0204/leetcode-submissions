class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        out = []
        for num in range(left, right + 1):
            num_list = []
            num_list = list(str(num))
            if "0" not in num_list:
                while num_list != []:
                    if num % int(num_list[-1]) != 0:
                        break
                    else:
                        num_list.pop()
                if num_list == []:
                    out.append(num)        
        return out
