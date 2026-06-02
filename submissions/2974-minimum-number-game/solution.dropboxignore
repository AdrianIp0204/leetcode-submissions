class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        nums.sort(reverse=True)
        tmp = []
        fin = []

        while nums != []:
            tmp.append(nums.pop())

            if len(tmp) == 2:
                tmp.reverse()
                fin.extend(tmp)
                tmp = []
   
        return fin
