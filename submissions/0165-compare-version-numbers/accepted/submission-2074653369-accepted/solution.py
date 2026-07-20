class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        v1, v2 = version1.split('.'), version2.split('.')
        l1, l2 = len(v1), len(v2)
        if l1 > l2:
            v2.extend([0] * (l1-l2))
        elif l1 < l2:
            v1.extend([0] * (l2-l1))
        for i, j in zip(v1, v2):
            if int(i) > int(j):
                return 1
            elif int(i) < int(j):
                return -1
        return 0
