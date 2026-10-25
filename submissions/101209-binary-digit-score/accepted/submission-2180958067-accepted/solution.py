class Solution:
    def calculateScore(self, a: int, b: int) -> int:
        def get_s(n):
            tmp = 0
            l = n.bit_length()
            for _ in range(l):
                if n & 1:
                    tmp += 1
                n >>= 1
            return tmp
        
        s1, s2 = get_s(a), get_s(b)

        if s1 >= s2:
            return s1 * s2
        return s2 // s1
