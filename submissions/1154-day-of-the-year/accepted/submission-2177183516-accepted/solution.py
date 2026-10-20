class Solution:
    def dayOfYear(self, date: str) -> int:
        tmp = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        year, month, date = date.split('-')
        year, month, date = int(year), int(month), int(date)
        if (year % 4 == 0 and year % 100) or (year % 400 == 0):
            if month > 2:
                return sum(tmp[:month-1]) + date + 1
        return sum(tmp[:month-1]) + date
