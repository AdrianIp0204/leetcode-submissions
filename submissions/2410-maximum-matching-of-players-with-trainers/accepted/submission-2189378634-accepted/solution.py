class Solution:
    def matchPlayersAndTrainers(self, players: list[int], trainers: list[int]) -> int:
        players = [-i for i in players]
        heapify(players)
        trainers = [-i for i in trainers]
        heapify(trainers)

        res = 0
        while trainers and players:
            if trainers[0] <= players[0]: 
                res += 1
                heappop(players)
                heappop(trainers)
            else:
                heappop(players)
        
        return res
