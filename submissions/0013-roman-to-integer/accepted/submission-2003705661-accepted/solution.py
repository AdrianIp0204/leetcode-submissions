class Solution:
    def romanToInt(self, s: str) -> int:
        
        value = {
            "roman": ["I", "V", "X", "L", "C", "D", "M"],
            "numeric": [1, 5, 10, 50, 100, 500, 1000]
        }

        pattern = {
            "roman": ["IV", "IX", "XL", "XC", "CD", "CM"],
            "numeric": [4, 9, 40, 90, 400, 900]
        }

        add = 0

        for i in range(len(pattern["roman"])):
            if pattern["roman"][i] in s:
                add = add + pattern["numeric"][i]
                s = s.replace(pattern["roman"][i],"")

        for i in range(len(value["roman"])):
            count = 0
            count = s.count(value["roman"][i])
            if value["roman"][i] in s:
                add = add + value["numeric"][i] * count
        
        return add
