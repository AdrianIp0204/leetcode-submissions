from collections import defaultdict
class AuctionSystem:

    def __init__(self):
        self.bids = defaultdict(dict)
        

    def addBid(self, userId: int, itemId: int, bidAmount: int) -> None:
        self.bids[itemId][userId] = bidAmount

    def updateBid(self, userId: int, itemId: int, newAmount: int) -> None:
        self.bids[itemId][userId] = newAmount
        

    def removeBid(self, userId: int, itemId: int) -> None:
        del self.bids[itemId][userId]

    def getHighestBidder(self, itemId: int) -> int:
        if not self.bids[itemId]:
            return -1
        UID = 0
        amount = 0
        for user, n in self.bids[itemId].items():
            if n > amount:
                UID = user
                amount = n
            elif n == amount:
                UID = max(UID, user)
        return UID        


# Your AuctionSystem object will be instantiated and called as such:
# obj = AuctionSystem()
# obj.addBid(userId,itemId,bidAmount)
# obj.updateBid(userId,itemId,newAmount)
# obj.removeBid(userId,itemId)
# param_4 = obj.getHighestBidder(itemId)
