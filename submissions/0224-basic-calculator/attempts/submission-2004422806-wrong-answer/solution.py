class Solution:
    def calculate(self, s: str) -> int:
        
        norm = s.strip
        norm = s.replace(" ", "")
        total = 0
        norm_list = list(norm)
        num_list = []
        bra = []
        ket = []
        bra_count = 0
        ket_count = 0
        count = -1

        for i, digit in enumerate(norm_list):
            if digit == "(":
                bra_count += 1
                bra.append([bra_count, i])
            if digit == ")":
                ket_count += 1
                ket.append([ket_count, i])



        for i, digit in enumerate(norm_list):
            if digit == "(":
                count +=1
                if i != 0 and norm_list[i-1] == "-":
                    for j in range(bra[count][1], ket[count][1]):
                        if norm_list[j] == "+":
                            norm_list[j] = "-"
                        elif norm_list[bra[count][1]+1] != "-":
                            norm_list.insert(bra[count][1]+1, "-")
                            for a, b in bra:
                                b +=1
                            for c, d in ket:
                                d +=1
                        else:
                            pass
                    
        print(norm_list)


        norm_list = [z for z in norm_list if (z != ")" and z != "(")]




        for i in range(len(norm_list)):
            if i == 0:
                if norm_list[i] == "-" :
                    pass
                else:
                    num_list.append(int(norm_list[0]))
            elif i != len(norm_list) or i != 0:
                if norm_list[i] == "-":
                    num_list.append("+")
                    num_list.append(int(norm_list[i+1]) * -1)
                elif norm_list[i] == "+":
                    num_list.append("+")
                elif norm_list[i-1] != "-":
                    num_list.append(int(norm_list[i]))

        if num_list[0] == "+":
            num_list.remove("+")
        if num_list[0] == "-":
            num_list.remove("-")

        print(norm_list, num_list)       
        for i in range(len(num_list)):
            if i % 2 == 0:
                total += num_list[i]

        
        return total
