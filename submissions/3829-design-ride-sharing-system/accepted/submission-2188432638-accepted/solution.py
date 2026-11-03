from collections import deque
class RideSharingSystem:

    def __init__(self):
        self.riders = deque()
        self.drivers = deque()
        self.cancel = set()

    def addRider(self, riderId: int) -> None:
        self.riders.append(riderId)

    def addDriver(self, driverId: int) -> None:
        self.drivers.append(driverId)

    def matchDriverWithRider(self) -> List[int]:
        if not self.drivers or not self.riders:
            return [-1, -1]
        return [self.drivers.popleft(), self.riders.popleft()]

    def cancelRider(self, riderId: int) -> None:
        self.riders = deque([i for i in self.riders if i != riderId])
        


# Your RideSharingSystem object will be instantiated and called as such:
# obj = RideSharingSystem()
# obj.addRider(riderId)
# obj.addDriver(driverId)
# param_3 = obj.matchDriverWithRider()
# obj.cancelRider(riderId)
