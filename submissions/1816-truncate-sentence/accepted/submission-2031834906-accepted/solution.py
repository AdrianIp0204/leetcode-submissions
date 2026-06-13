class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        return " ".join([s.split()[i] for i in range(k)])
