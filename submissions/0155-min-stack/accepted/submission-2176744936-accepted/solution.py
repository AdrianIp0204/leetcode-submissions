class MinStack:

    def __init__(self):
        self.s = []
        self.min = [float('inf')]

    def push(self, value: int) -> None:
        self.s.append(value)
        self.min.append(min(self.min[-1], value))

    def pop(self) -> None:
        self.s.pop()
        self.min.pop()

    def top(self) -> int:
        return self.s[-1]
        

    def getMin(self) -> int:
        return self.min[-1]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(value)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
