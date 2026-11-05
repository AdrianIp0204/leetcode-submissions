from collections import deque
class Solution:
    def stoneGame(self, piles: list[int]) -> bool:
        piles = deque(piles)

        turn = True
        alice = 0
        bob = 0

        while piles:
            if turn:
                if piles[0] > piles[-1]:
                    alice += piles.popleft()
                else:
                    alice += piles.pop()
                turn = False
            else:
                if piles[0] > piles[-1]:
                    bob += piles.popleft()
                else:
                    bob += piles.pop()
                turn = True

        return alice > bob
