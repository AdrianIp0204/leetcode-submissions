class Solution:
    def exclusiveTime(self, n: int, logs: list[str]) -> list[int]:
        res = [0] * n
        stack = []
        for log in logs:
            Id, action, time = log.split(':')
            time = int(time)
            if action == 'start':
                if stack and time != curr:
                    res[stack[-1]] += time - curr
                curr = time             
                stack.append(int(Id))
            else:
                res[stack.pop()] += time - curr + 1
                curr = time + 1
        return res
