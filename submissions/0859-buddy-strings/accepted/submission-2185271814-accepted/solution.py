class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        l = len(s)
        if l != len(goal):
            return False
        
        tmp = Counter(goal)
        n = len(tmp)
        for k, v in Counter(s).items():
            if tmp.get(k, 0) != v:
                return False
    

        count = 0
        
        for a, b in zip(s, goal):
            if a != b:
                count += 1

        return True if count == 2 or (count == 0 and n < l) else False
