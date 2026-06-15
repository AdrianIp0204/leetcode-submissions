class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        sap = [
            ".-", "-...", "-.-.", "-..", ".", "..-.", "--.",
            "....", "..", ".---", "-.-", ".-..", "--", "-.",
            "---", ".--.", "--.-", ".-.", "...", "-", "..-",
            "...-", ".--", "-..-", "-.--", "--.."
        ]
        wet = set()
        for word in words:
            tmp = []
            for c in word:
                tmp.append(sap[ord(c) - 97])
            wet.add("".join(tmp))
        return len(wet)
