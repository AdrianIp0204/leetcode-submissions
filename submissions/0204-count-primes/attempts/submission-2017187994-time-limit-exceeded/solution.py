class Solution:
    def countPrimes(self, n: int) -> int:
        if n == 0 or n == 1 or n == 2:
            return 0
        else:
            pr_list = [2]
            if n % 2 == 0:
                n += 1
            for i in range(3, n, 2):
                root = int(math.sqrt(i)) + 1
                for prime in pr_list:
                    if prime < root:
                        if i % prime == 0:
                            break
                    else:
                        pr_list.append(i)
                        break
            return len(pr_list)
