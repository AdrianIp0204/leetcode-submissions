class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        nap = {}
        def search(n):
            if n < 0:
                return -1
            if n == 0:
                return 0
            if n in nap:
                return nap[n]

            tmp = float('inf')

            for c in coins:
                res = search(n - c)
                if res != -1:
                    tmp = min(tmp, 1 + res)

            nap[n] = tmp if tmp != float('inf') else -1
            return nap[n]

        return search(amount)
