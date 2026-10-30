class Solution:
    def entityParser(self, text: str) -> str:
        wap = {
            '&quot;' : '"',
            '&apos;' : "'",
            '&gt;' : '>',
            '&lt;' : '<',
            '&frasl;' : '/',
            '&amp;' : '&'
        }
        for k, v in wap.items():
            text = re.sub(fr'{k}', fr'{v}', text)
        
        return text
