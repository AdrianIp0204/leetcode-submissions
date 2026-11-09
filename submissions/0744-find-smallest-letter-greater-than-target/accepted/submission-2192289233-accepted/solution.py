class Solution:
    def nextGreatestLetter(self, letters: list[str], target: str) -> str:
        l, r = 0, len(letters) - 1
        while l <= r:
            mid = (l+r) // 2
            if letters[mid] > target:
                r = mid - 1
            else:
                l = mid + 1
        return letters[l % len(letters)]
