class Solution:
    def busyStudent(self, st: List[int], et: List[int], qt: int) -> int:
        res = 0
        for s, e in zip(st, et):
            if s <= qt <= e:
                res += 1
        return res
