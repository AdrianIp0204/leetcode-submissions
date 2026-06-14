class Solution:
    def capitalizeTitle(self, title: str) -> str:
        TITLE = title.title().split()
        res = []
        for w in TITLE:
            if len(w) < 3:
                res.append(w.lower())
            else:
                res.append(w)
        return " ".join(res)
