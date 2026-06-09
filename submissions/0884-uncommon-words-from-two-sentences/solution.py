class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        return [i for i,c in Counter(s1.split()+s2.split()).items() if c==1]
