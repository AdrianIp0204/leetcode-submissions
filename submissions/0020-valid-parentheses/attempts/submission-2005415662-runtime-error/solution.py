class Solution:
    def isValid(self, s: str) -> bool:

        brackets = [
            ["(", ")"], ["{", "}"], ["[", "]"]
        ]
        
        output = True
        s_list = list(s)
        pos = [[[],[]],[[],[]],[[],[]]] 
        stat = []


        for i, bra in enumerate(s_list):
            for j in range(3):
                for k in range(2):
                    if bra == brackets[j][k]:
                        pos[j][k].append(i)
                        stat.append([i,j,k])

        for i in range(len(stat)):
            if i != len(stat) and stat[i] is not None and len(stat) != 1:
                if stat[i][2] == 0 and stat[i+1][2] == 1:
                    if stat[i][1] != stat[i+1][1]:
                        output = False
                        break

        for i in range(3):
            if len(pos[i][0]) != len(pos[i][1]):
                output = False
                break
            if len(pos[i][0]) > 0:
                for j in range(len(pos[i][k])):
                    if (pos[i][0][j] + pos[i][1][j]) % 2 == 0:
                        output = False
                        break
                    elif (pos[i][1][j] - pos[i][0][j]) < 0:
                        output = False
                        break

        


        return output
