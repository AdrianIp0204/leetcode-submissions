class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        stack = []
        for i in range(len(temperatures)):
            while stack and temperatures[i] > temperatures[stack[-1]]:
                last = stack.pop()
                temperatures[last] = i - last
            stack.append(i)
        while stack:
            temperatures[stack.pop()] = 0
        return temperatures
