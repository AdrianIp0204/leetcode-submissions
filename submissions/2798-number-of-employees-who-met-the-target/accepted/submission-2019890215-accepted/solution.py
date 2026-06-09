class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        hours.sort(reverse=True)
        h_list=[]
        for h in hours:
            if h >= target:
                h_list.append(h)
            else:
                break
        return len(h_list)
