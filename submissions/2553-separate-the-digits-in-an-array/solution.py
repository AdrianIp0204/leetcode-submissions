class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        res = []
        for n in nums:
            if n > 9:
                tmp = []
                while n != 0:
                    tmp.append(n%10)
                    n //= 10
                res.extend(tmp[::-1])
            else:
                res.append(n)
        return res
