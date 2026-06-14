class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        xr = 0
        for i in range(len(pref)):
            pref[i] = xr ^ pref[i]
            xr = xr ^ pref[i]
        return pref
