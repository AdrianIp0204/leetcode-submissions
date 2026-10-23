from collections import defaultdict, Counter
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_length = len(words[0])
        s_length = len(s)

        answer = Counter(words)
        wap = defaultdict(int)
        dict_length = len(answer)

        left, right = 0, word_length
        curr = 0

        res = []

        while right <= s_length:
            word = s[curr:right]
            if word in answer:
                wap[word] += 1
                for k, v in answer.items():
                    if wap[k] > v:
                        wap[s[left:left+word_length]] -= 1
                        left += word_length
                        curr += word_length
                        right += word_length
                        break
                    elif wap[k] < v:
                        right += word_length
                        curr += word_length
                        break
                else:
                    res.append(left)
                    wap[s[left:left+word_length]] -= 1
                    left += word_length
                    curr += word_length
                    right += word_length
            else:
                wap = defaultdict(int)
                curr += 1
                left = curr
                right = left + word_length
        return res
