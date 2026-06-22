class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        ct = Counter(text)
        if 'b' in ct and 'a' in ct and 'l' in ct and 'o' in ct and 'n' in ct:
            return min(ct['b'], ct['a'], ct['l']//2, ct['o']//2, ct['n'])
        return 0
