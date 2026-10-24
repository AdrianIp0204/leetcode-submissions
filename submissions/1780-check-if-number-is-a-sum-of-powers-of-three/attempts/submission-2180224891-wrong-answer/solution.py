class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        tmp = [1]
        three = 1
        

        while three < n:
            three *= 3
            tmp.append(three)

        l = len(tmp)

        def search(curr, exp):
            if curr == n:
                return True
            elif curr > n or exp >= l:
                return False
            
            return search(curr + tmp[exp], exp + 1) or search(curr, exp + 1)

        return search(1, 0) or search(0, 0)
