class Solution:
    def distinctAverages(self, nums: List[int]) -> int:
        L = 0
        R = len(nums) - 1
        net = set()
        nums.sort()
        while R > L:
            net.add((nums[R] + nums[L])/2)
            L += 1
            R -= 1
        return len(net)
