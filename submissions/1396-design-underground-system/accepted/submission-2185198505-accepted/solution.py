class UndergroundSystem:

    def __init__(self):
        self.data = {}
        self.time = defaultdict(list)
        

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.data[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        self.time[(self.data[id][0], stationName)].append(t - self.data[id][1])
        del self.data[id]

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        return sum(self.time[(startStation, endStation)]) / len(self.time[(startStation, endStation)])


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)
