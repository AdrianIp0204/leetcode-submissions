class Solution:
    def canConstruct(self, r: str, m: str) -> bool:
        cr, cm = Counter(r), Counter(m)
        for k, v in cr.items():
            if v > cm.get(k, 0):
                return False
        return True
