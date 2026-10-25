class Solution:
    def countStaircase(self, nums: list[int]) -> int:
        n = len(nums)
        res = 0

        for i in range(n):
            freq = {}
            need = 0

            for j in range(i, n):
                curr = nums[j]

                if curr not in freq:
                    target = len(freq) + 1
                    freq[curr] = [0, target]
                    need += target
                
                freq[curr][0] += 1

                if freq[curr][0] > freq[curr][1]:
                    break

                if j - i + 1 == need:
                    res += 1
        return res
