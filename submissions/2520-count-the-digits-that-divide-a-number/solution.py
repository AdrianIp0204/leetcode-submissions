class Solution:
    def countDigits(self, num: int) -> int:
        count = 0
        num_list= list(str(num))
        num_dict = {n: False for n in list(str(num))}
        for n in list(num_dict.keys()):
            if num % int(n) == 0:
                num_dict[n] = True
                count += num_list.count(n)
        return count
