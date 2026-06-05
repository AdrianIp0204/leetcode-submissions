class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        s1 = [int(d) for d in str(num1)]
        s2 = [int(d) for d in str(num2)]

        while len(s1) < len(s2):
            s1.insert(0, 0)

        def is_wave(a, b, c):
            return (b > a and b > c) or (b < a and b < c)

        dp = {
            (-1, -1, False, True, True): [1, 0]
        }

        for i in range(len(s2)):
            new_dp = defaultdict(lambda: [0, 0])

            for (prev2, prev1, started, low_tight, high_tight), (count, waves) in dp.items():
                low = s1[i] if low_tight else 0
                high = s2[i] if high_tight else 9

                for d in range(low, high + 1):
                    new_low_tight = low_tight and d == s1[i]
                    new_high_tight = high_tight and d == s2[i]

                    if not started and d == 0:
                        key = (-1, -1, False, new_low_tight, new_high_tight)
                        new_dp[key][0] += count
                        new_dp[key][1] += waves
                        continue

                    if not started:
                        key = (-1, d, True, new_low_tight, new_high_tight)
                        new_dp[key][0] += count
                        new_dp[key][1] += waves
                        continue

                    add = 0
                    if prev2 != -1 and is_wave(prev2, prev1, d):
                        add = 1

                    key = (prev1, d, True, new_low_tight, new_high_tight)

                    new_dp[key][0] += count
                    new_dp[key][1] += waves + add * count

            dp = new_dp

        return sum(waves for count, waves in dp.values())
