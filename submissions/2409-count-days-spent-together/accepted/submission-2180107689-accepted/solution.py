from itertools import accumulate
class Solution:
    def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:
        month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        days_before_month = list(accumulate(month_days, initial=0))

        def to_day(date: str) -> int:
            month, day = map(int, date.split("-"))
            return days_before_month[month - 1] + day

        start = max(to_day(arriveAlice), to_day(arriveBob))
        end = min(to_day(leaveAlice), to_day(leaveBob))

        return max(0, end - start + 1)
