class Solution:
    def isPalindrome(self, s: str) -> bool:
        s=s.lower()
        sl=[i for i in s if 96<ord(i)<123 or 47<ord(i)<58]
        return True if sl==sl[::-1] else False
