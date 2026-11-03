class SmallestInfiniteSet:

    def __init__(self):
        self.remove = set()
        self.num = 1

    def popSmallest(self) -> int:
        while self.num in self.remove:
            self.num += 1
        self.remove.add(self.num)
        return self.num

    def addBack(self, num: int) -> None:
        self.remove.discard(num)
        self.num = min(self.num, num)
        


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)
