class Solution:
    def summaryRanges(self, nums: list[int]) -> list[str]:
        if not nums:
            return nums
        tmp = [[nums[0]]]
        p = 0
        for i in range(1, len(nums)):
            if nums[i] == nums[i-1] + 1:
                tmp[p].append(nums[i])
            else:
                tmp.append([nums[i]])
                p += 1
        
        res = []
        for n in tmp:
            if len(n) == 1:
                res.append(str(n[0]))
            else:
                res.append(f'{n[0]}->{n[-1]}')
        return res
