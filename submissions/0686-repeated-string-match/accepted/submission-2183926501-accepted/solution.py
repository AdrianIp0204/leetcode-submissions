class Solution:
    def repeatedStringMatch(self, a: str, b: str) -> int:
        if not b:
            return 0
        curr = 1
        tmp = a
        MAX = len(b) // len(a) + 2
        while curr <= MAX:
            if re.search(b, tmp):
                return curr
            curr += 1
            tmp = tmp + a
        return -1
