class Solution:
    def reverse(self, x: int) -> int:
        if x == -2147483648:
            return 0
        elif x == 0:
            return 0    
        else:
            num_list = []
            x_list = list(str(x))
            if x < 0:
                x_list.pop(0)
            x_list.reverse()
            while x_list[0] == "0":
                x_list.pop(0)
            out = "".join(x_list)
            if int(out) > 2147483647:
                return 0
            elif x < 0:
                return int(out) * -1
            return int(out)
