class MyQueue:

    def __init__(self):
        self.q = []

    def push(self, x: int) -> None:
        self.q.append(x)
        
    def pop(self) -> int:
        tmp = []
        for _ in range(len(self.q) - 1):
            tmp.append(self.q.pop())
        res = self.q.pop()
        for _ in range(len(tmp)):
            self.q.append(tmp.pop())
        return res 

    def peek(self) -> int:
        tmp = []
        for _ in range(len(self.q) - 1):
            tmp.append(self.q.pop())
        res = self.q[-1]
        for _ in range(len(tmp)):
            self.q.append(tmp.pop())
        return res 
        

    def empty(self) -> bool:
        return not self.q
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
