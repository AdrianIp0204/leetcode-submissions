class Solution:
    def entityParser(self, text: str) -> str:
        wap = {
            '&quot;' : '"',
            '&apos;' : "'",
            '&amp;' : '&',
            '&gt;' : '>',
            '&lt;' : '<',
            '&frasl;' : '/'
        }
        for k, v in wap.items():
            text = re.sub(fr'{k}', fr'{v}', text)
        return text
