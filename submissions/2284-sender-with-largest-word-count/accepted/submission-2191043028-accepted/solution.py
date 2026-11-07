class Solution:
    def largestWordCount(self, messages: list[str], senders: list[str]) -> str:
        nap = defaultdict(int)
        for sender, message in zip(senders, messages):
            nap[sender] += len(message.split())
        return max(nap.keys(), key=lambda x: (nap[x], x))
