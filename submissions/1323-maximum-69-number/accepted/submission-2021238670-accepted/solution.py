class Solution:
    def maximum69Number (self, num: int) -> int:
        s=str(num)
        if "6" in s:
            s=s.replace("6","9",1)
        return int(s)
