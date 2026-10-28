class Solution:
    def validIPAddress(self, s: str) -> str:
        dot = 0
        colon = 0
        string = False

        for c in s:
            if c == '.':
                dot += 1
            elif c == ':':
                colon += 1
            elif 102 < ord(c) < 123:
                return 'Neither'
            elif c.isalpha():
                string = True

        if (dot and colon) or (not dot and not colon):
            return 'Neither'

        if dot:
            if string:
                return 'Neither'
            if dot != 3:
                return 'Neither'
            for i in s.split('.'):
                if not i or (i != '0' and i[0] == '0') or int(i) < 0 or int(i) > 255:
                    return 'Neither'
            return 'IPv4'
        else:
            if colon != 7:
                return 'Neither'
            for i in s.split(':'):
                if len(i) > 4 or len(i) <= 0:
                    return 'Neither'
            return 'IPv6'
