from collections import defaultdict, Counter

class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_length = len(words[0])
        s_length = len(s)

        answer = Counter(words)
        res = []

        for offset in range(word_length):
            wap = defaultdict(int)
            left, curr, right = offset, offset, offset + word_length

            while right <= s_length:
                word = s[curr:right]

                if word in answer:
                    wap[word] += 1

                    while wap[word] > answer[word]:
                        wap[s[left:left+word_length]] -= 1
                        left += word_length

                    if right - left == word_length * len(words):
                        res.append(left)
                        wap[s[left:left+word_length]] -= 1
                        left += word_length

                else:
                    wap.clear()
                    left = right

                curr += word_length
                right += word_length

        return res
