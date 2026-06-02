class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        #comb
        count = 0
        out = []
        tmp = []
        while count != numRows:
            for i in range(0, numRows):
                for j in range(0, i + 1):
                    tmp.append(comb(i,j))
                out.append(tmp)
                tmp = []
                count += 1
        return out
