from itertools import accumulate
class Solution:
    def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:
        month = list(accumulate([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]))
        aa, la, ab, lb = [month[int(m)-1] + int(d) for t in [arriveAlice, leaveAlice, arriveBob, leaveBob] for m,d in [t.split('-')]]
        return min(la, lb) - max(aa, ab) + 1 if la >= ab and lb >= aa else 0
