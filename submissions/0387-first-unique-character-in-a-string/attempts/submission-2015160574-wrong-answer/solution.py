class Solution:
    def firstUniqChar(self, s: str) -> int:
        s_list = list(s)
        check = []
        for i, a in enumerate(s_list):
            if a in check:
                check.remove(a)
            else:
                check.append(a)

        if len(check) > 0:
            return s_list.index(check[0])
        else:
            return -1
