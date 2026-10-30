class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        
        count = 0
        
        for a, b in zip(s, goal):
            if a != b:
                count += 1

        return True if count == 2 or (count == 0 and len(set(s)) < len(s)) else False
