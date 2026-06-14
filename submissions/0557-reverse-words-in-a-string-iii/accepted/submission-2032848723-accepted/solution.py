class Solution:
    def reverseWords(self, s: str) -> str:
        sist = s.split()
        for i in range(len(sist)):
            sist[i]= sist[i][::-1]
        return " ".join(sist)
