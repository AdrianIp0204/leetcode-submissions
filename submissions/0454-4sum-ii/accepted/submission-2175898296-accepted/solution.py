from collections import Counter
class Solution:
    def fourSumCount(self, nums1: list[int], nums2: list[int], nums3: list[int], nums4: list[int]) -> int:
        res = 0
        sum1, sum2 = {}, {}

        for i in nums1:
            for j in nums2:
                sum1[i+j] = sum1.get(i+j, 0) + 1
        
        for i in nums3:
            for j in nums4:
                sum2[i+j] = sum2.get(i+j, 0) + 1

        for t in sum1:
            for c in sum2:
                if t == -c:
                    res += sum1[t] * sum2[c]

        return res
