class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        carr = Counter(arr)
        if len(carr.values()) == len(set(carr.values())):
            return True
        return False
