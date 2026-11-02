class ExamTracker:

    def __init__(self):
        self.records = [(0, 0)]
        self.total = 0

    def record(self, time: int, score: int) -> None:
        self.total += score
        self.records.append((time, self.total))

    def totalScore(self, startTime: int, endTime: int) -> int:
        left = bisect_left(self.records, startTime, key=lambda x:x[0]) - 1

        right = bisect_right(self.records, endTime, key=lambda x:x[0]) - 1
        
        return self.records[right][1] - self.records[left][1]
        
        


# Your ExamTracker object will be instantiated and called as such:
# obj = ExamTracker()
# obj.record(time,score)
# param_2 = obj.totalScore(startTime,endTime)
