class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        length = 1
        l = len(nums)
        
        while length <= l:
            i = 0
            j = i + length
            tmp = sum(nums[i:j])
            
            if tmp >= target:
                return length
            
            while j < l:
                tmp += nums[j] - nums[i]
                if tmp >= target:
                    return length
                j += 1
                i += 1
                
            length += 1

        return 0
