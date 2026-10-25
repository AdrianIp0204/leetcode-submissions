class Solution:
    def countStaircase(self, nums: list[int]) -> int:
        freq = {1:len(nums)}
        l = len(nums) 
        for i in range(l):
            need = 1
            c = 1
            j = i + 1
            if j < l and nums[i] != nums[j]:
                while j < l:
                    if nums[j] == nums[j-1]:
                        if need > 0:
                            need -= 1
                            if need == 0:
                                c += 1
                                need = c
                                freq[c] = freq.get(c, 0) + 1
                                print(freq)
                                j += 1
                        else:
                            break
                    j += 1
        return sum(freq.values())
