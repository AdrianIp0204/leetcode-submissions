class Solution:
    def countTime(self, time: str) -> int:
        h1, h2, m1, m2 = 1, 1, 1, 1
        t1, t2, t3, t4 = time[0], time[1], time[3], time[4]
        if t1 == "?":
            if t2 == "?" or int(t2) < 4:
                h1 = 3
            elif int(t2) > 3:
                h1 = 2
        if t2 == "?":
            if t1 == "?":
                h2 = 8
            elif int(t1) < 2:
                h2 = 10
            elif t1 == "2":
                h2 = 4
        if t3 == "?":
            m1 = 6
        if t4 == "?":
            m2 = 10
        return h1 * h2 * m1 * m2
