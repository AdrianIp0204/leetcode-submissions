from collections import deque
class Solution:
    def openLock(self, deadends: list[str], target: str) -> int:
        
        if '0000' in deadends:
            return -1

        def neighbors(s):
            s_list = [int(c) for c in s]
            out = []
            for i, n in enumerate(s_list):
                for m in [n - 1, n + 1] :
                    tmp = s_list.copy()

                    if m == -1:
                        m = 9
                    elif m == 10:
                        m = 0
                    
                    tmp[i] = m

                    out.append(''.join([str(a) for a in tmp]))
            return out


        frontier = deque([('0000', 0)])
        explored = {'0000'}
        deadends = set(deadends)

        def search():
            now, d = frontier.popleft()

            if now == target:
                return d
            
            for neighbor in neighbors(now):
                if neighbor not in explored and neighbor not in deadends:
                    explored.add(neighbor)
                    frontier.append((neighbor, d + 1))

        while frontier:
            n = search()
            if n is not None:
                return n
        return -1
