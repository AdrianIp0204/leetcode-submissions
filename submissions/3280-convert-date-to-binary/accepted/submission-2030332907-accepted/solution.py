class Solution:
    def convertDateToBinary(self, date: str) -> str:
        return "-".join(f"{int(i):b}" for i in date.split("-"))
