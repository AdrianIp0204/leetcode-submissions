class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        freq_list = []
        res = []
        for s in strs:
            freq = {}
            for i in s:
                freq[i] = freq.get(i, 0) + 1
            if freq not in freq_list:
                freq_list.append(freq)
                res.append([s])
            else:
                j = freq_list.index(freq)
                res[j].append(s)
        return res
