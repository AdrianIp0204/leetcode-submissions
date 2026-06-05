class Solution:
    def calPoints(self, op: List[str]) -> int:
        n = []
        for x in op:
            if x == "C":
                n.pop()
            elif x == "D":
                n.append(n[-1] * 2)
            elif x == "+":
                n.append(n[-1] + n[-2])
            else:
                n.append(int(x))
            print(n)
        return sum(n)
