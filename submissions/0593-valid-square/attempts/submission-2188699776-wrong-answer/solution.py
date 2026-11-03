class Solution:
    def validSquare(self, p1: list[int], p2: list[int], p3: list[int], p4: list[int]) -> bool:
        nap = defaultdict(int)
        x, y = p1
        for i, j in [p2,p3,p4]:
            nap[sqrt(abs(x - i) ** 2 + abs(y - j) ** 2)] += 1
        x, y = p2
        for i, j in [p3, p4]:
            nap[sqrt(abs(x - i) ** 2 + abs(y - j) ** 2)] += 1
        nap[sqrt(abs(p3[0] - p4[0]) ** 2 + abs(p3[1] - p4[1]) ** 2)] += 1
        if len(nap) != 2:
            return False
        if set(nap.values()) != {2,4}:
            return False
        return True
