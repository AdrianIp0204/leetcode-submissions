class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        d_list = []
        for num in nums:
            if len(str(num)) > 1:
                num_list = list(str(num))
                for i in num_list:
                    d_list.append(int(i))
            else:
                d_list.append(num)
        return abs(sum(nums) - sum(d_list))
