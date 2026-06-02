class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        for i in range(len(nums)):
            for j in range(len(nums)):
                if (i != j) & (nums[i] + nums[j] == target):
                    a=i
                    b=j
                    break
                else:
                    pass

        output = [a, b]


        return output
