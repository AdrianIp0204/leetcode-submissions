from collections import defaultdict
from heapq import heappop, heappush
class AuctionSystem:

    def __init__(self):
        self.bids = defaultdict(dict)
        self.q = defaultdict(list)

    def addBid(self, userId: int, itemId: int, bidAmount: int) -> None:
        self.bids[itemId][userId] = bidAmount
        heappush(self.q[itemId], (-bidAmount, -userId))

    def updateBid(self, userId: int, itemId: int, newAmount: int) -> None:
        self.bids[itemId][userId] = newAmount
        heappush(self.q[itemId], (-newAmount, -userId))     

    def removeBid(self, userId: int, itemId: int) -> None:
        del self.bids[itemId][userId]

    def getHighestBidder(self, itemId: int) -> int:
        bids = self.bids[itemId]
        q = self.q[itemId]

        while q:
            amount, user = -q[0][0], -q[0][1]
            if bids.get(user, -1) == amount:
                return user
            heappop(q)

        return -1


# Your AuctionSystem object will be instantiated and called as such:
# obj = AuctionSystem()
# obj.addBid(userId,itemId,bidAmount)
# obj.updateBid(userId,itemId,newAmount)
# obj.removeBid(userId,itemId)
# param_4 = obj.getHighestBidder(itemId)
