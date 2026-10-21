from collections import defaultdict
from bisect import bisect_right
class TimeMap:

    def __init__(self):
        self.table = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.table[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.table:
            return ''
        
        idx = bisect_right(self.table[key], timestamp, key=lambda x: x[0])

        if idx == 0:
            return ''
        
        return self.table[key][idx-1][1]

        


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
