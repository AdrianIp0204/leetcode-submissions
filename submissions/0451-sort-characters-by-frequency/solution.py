class Solution:
    def frequencySort(self, s: str) -> str:
        return "".join([w for w, f in Counter(s).most_common() for _ in range(f)])
