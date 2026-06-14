class Solution:
    def isValid(self, s: str) -> bool:

        brackets = [
            ["(", ")"], ["{", "}"], ["[", "]"]
        ]
        
        output = True
        s_list = list(s)
        pos = [[[],[]],[[],[]],[[],[]]]


        for i, bra in enumerate(s_list):
            for j in range(3):
                for k in range(2):
                    if bra == brackets[j][k]:
                        pos[j][k].append(i)

        for i in range(3):
            if len(pos[i][0]) != len(pos[i][1]):
                output = False
                break
            if len(pos[i][0]) > 0:
                for j in range(len(pos[i][k])):
                    if (pos[i][0][j] + pos[i][1][j]) % 2 == 0:
                        output = False
                        break

        


        return output
