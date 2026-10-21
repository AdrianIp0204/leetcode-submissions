import heapq
class KthLargest:

    def __init__(self, k: int, nums: list[int]):
        self.k = k
        self.scores = nums
        heapq.heapify(nums)

        while len(self.scores) > self.k:
            heapq.heappop(self.scores)


    def add(self, val: int) -> int:
        heapq.heappush(self.scores, val)

        if len(self.scores) > self.k:
            heapq.heappop(self.scores)
        
        return self.scores[0]



# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
