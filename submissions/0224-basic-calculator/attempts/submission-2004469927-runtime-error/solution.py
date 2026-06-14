class Solution:
    def calculate(self, s: str) -> int:
        
        norm = s.strip()
        norm = s.replace(" ", "")
        total = 0
        num_list = []
        bra = []
        ket = []
        bra_count = 0
        ket_count = 0
        count = -1

        norm_list = list(norm)

        if "+" not in norm and "-" not in norm:
            norm_list = [z for z in norm_list if (z != ")" and z != "(")]
            total = int("".join(norm_list))
        else:

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
                            elif norm_list[j] == "-":
                                norm_list[j] = "+"

                        
                        if norm_list[bra[count][1]+1] != "-" and norm_list[bra[count][1]+1] != "+":
                            norm_list.insert(bra[count][1]+1, "-")
                            for x in range(len(bra)):
                                bra[x][1] +=1
                            for y in range(len(ket)):
                                ket[y][1] +=1
                        del norm_list[i-1]

                        



            norm_list = [z for z in norm_list if (z != ")" and z != "(")]


            print(norm_list)

            for i in range(len(norm_list)):
                if i == 0:
                    if norm_list[i] == "-" :
                        num_list.append(-int(norm_list[1]))
                    else:
                        num_list.append(int(norm_list[0]))
                elif i != len(norm_list) and i != 0:
                    if norm_list[i] == "-":
                        num_list.append("+")
                        num_list.append(int(norm_list[i+1]) * -1)
                    elif norm_list[i] == "+":
                        num_list.append("+")
                    elif norm_list[i-1] != "-":
                        num_list.append(int(norm_list[i]))

            print(num_list)

            if num_list[0] == "+":
                num_list.remove("+")
            if num_list[0] == "-":
                num_list.remove("-")

                
            for i in range(len(num_list)):
                if i % 2 == 0:
                    total += num_list[i]

        
        return total
