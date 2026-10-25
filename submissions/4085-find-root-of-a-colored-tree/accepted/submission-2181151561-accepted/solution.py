class Solution:
    def findColoredRoot(self, edges: list[list[int]], colors: str) -> int:
        n = len(colors)
        next_color = {'R': 'B',
                    'B': 'W',
                    'W': 'R'}
        parents = [0] * n
        childrien = [0] * n
        mapp = defaultdict(list)
        for [i, j] in edges:
            mapp[i].append(j)
            mapp[j].append(i)

        for k, l in mapp.items():
            nxt = next_color[colors[k]]
            if len(l) > 3:
                return -1
            if any(colors[i] == colors[k] for i in l):
                return -1
            if all(colors[i] == nxt for i in l):
                childrien[k] += len(l)
                continue
            for i in l:
                if colors[i] == nxt:
                    childrien[k] += 1
                else:
                    parents[k] += 1
        
        res = []

        if any(i > 2 for i in childrien):
            return -1

        for i, n in enumerate(parents):
            if n == 0:
                res.append(i)
        
        

        if len(res) != 1:
            return -1
        return res[0]
