class NumberContainers:

    def __init__(self):
        self.indexes = {}
        self.nums = defaultdict(set)

    def change(self, index: int, number: int) -> None:
        original = self.indexes.get(index, -1)
        self.indexes[index] = number

        if original != -1:
            self.nums[original].remove(index)
            if not self.nums[original]:
                del self.nums[original]

        self.nums[number].add(index)

    def find(self, number: int) -> int:
        if number not in self.nums:
            return -1
        return min(self.nums[number])
        


# Your NumberContainers object will be instantiated and called as such:
# obj = NumberContainers()
# obj.change(index,number)
# param_2 = obj.find(number)
