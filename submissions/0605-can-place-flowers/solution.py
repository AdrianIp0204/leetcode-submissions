class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True
        if 1 not in flowerbed:
            return (len(flowerbed) + 1) // 2 >= n
        res = 0
        c = 0
        seen = False
        for x in flowerbed:
            if x == 0:
                c += 1
            else:
                if not seen:
                    res += c // 2
                    seen = True
                else:
                    res += max(0, (c - 1) // 2)
                if res >= n:
                    return True
                c = 0
        res += c // 2
        return res >= n
