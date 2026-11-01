class Solution:
    def minimumMaxValue(self, n: int, index: int, value: int) -> int:
        
        def factors(n):
            if n %2 == 0:
                return 2
            for i in range(3, n + 1, 2):
                if n % i == 0:
                    return i
            return -1

        num = factors(value)

        if num == -1:
            return -1

        if index * num >= value:
            return -1

        return value + (n-index-1) * num
