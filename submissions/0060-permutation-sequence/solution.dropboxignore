class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        num_list = []
        permutation = []
        out = []
        for i in range(1, n+1):
            num_list.append(i)
        permutation = list(permutations(num_list))
        for j in permutation[k-1]:
            out.append(str(j))
        fin = "".join(out)
        return fin
