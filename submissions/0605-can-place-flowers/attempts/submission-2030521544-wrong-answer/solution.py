class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        res = 0
        c = 0
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0:
                c += 1
            else:
                if i == 2 and c == 2:
                    res += 1
                elif c >= 3:
                    res += (c - 1) // 2
                c = 0
        if c == 2:
            res += 1
        elif c >= 3:
            res += (c - 1) // 2
        return True if res == n else False
