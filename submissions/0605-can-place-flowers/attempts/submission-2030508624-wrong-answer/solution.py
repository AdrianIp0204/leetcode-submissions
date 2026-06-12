class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        res = 0
        c = 0
        while flowerbed:
            if flowerbed.pop() == 0:
                c += 1
            else:
                if c > 2:
                    res += (c - 1) // 2
                c = 0
        if c > 2:
            res += (c - 1) // 2
        return True if res == n else False
