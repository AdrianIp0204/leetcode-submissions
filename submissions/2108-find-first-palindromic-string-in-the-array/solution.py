class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            if word == "".join(reversed(word)):
                return word
        return ""
