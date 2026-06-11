class Solution:
    def reverseWords(self, s: str) -> str:
        s_list = s.split()
        s_list.reverse()
        return " ".join(s_list)
