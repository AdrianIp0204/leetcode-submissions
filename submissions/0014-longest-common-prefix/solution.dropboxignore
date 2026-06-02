class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        str_list=[]
        out = ""
        for s in strs:
            str_list.append(list(s))
        str_list.sort(key=len)
        for i, s in enumerate(str_list[0]):
            for j in range(len(str_list)):
                if str_list[j][i] != str_list[0][i]:
                    return out
            out = out + s
        return out
