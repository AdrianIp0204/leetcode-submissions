class Solution:
    def intToRoman(self, num: int) -> str:
        
        va0={
            "ro": ["M", "C", "X", "I"],
            "nu": [1000, 100, 10, 1]
        }

        va5={
            "ro": ["D", "L", "V"],
            "nu": [500, 50, 5]
        }

        pat4={
            "ro": ["CD", "XL", "IV"],
            "nu": [400, 40, 4]
        }

        pat9={
            "ro": ["CM", "XC", "IX"],
            "nu": [900, 90, 9]
        }

        num = str(num)
        num_list = list(num)


        out = ""

        for i in range(len(num_list)):
            magic = (4-len(num_list))
            if num_list[i] == "4":
                out += pat4["ro"][i-1+magic]
            if num_list[i] == "9":
                out += pat9["ro"][i-1+magic]
            if num_list[i] == "1":
                out += va0["ro"][i+magic]
            if num_list[i] == "2":
                out += va0["ro"][i+magic] * 2
            if num_list[i] == "3":
                out += va0["ro"][i+magic] * 3
            if num_list[i] == "5":
                out += va5["ro"][i-1+magic]
            if num_list[i] == "6":
                out += va5["ro"][i-1+magic] + va0["ro"][i+magic]
            if num_list[i] == "7":
                out += va5["ro"][i-1+magic] + va0["ro"][i+magic] * 2
            if num_list[i] == "8":
                out += va5["ro"][i-1+magic] + va0["ro"][i+magic] * 3




        return out
