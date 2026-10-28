class Solution:
    def maskPII(self, s: str) -> str:
    
        if '@' in s:
            s = s.lower()
            name, domain, end = re.split(r'@|\.', s)
            return f'{name[0]}*****{name[-1]}@{domain}.{end}' 
        else:

            num = [n for n in s if n not in '()-+']
            code = len(num) % 10
            if code:
                return f'+{"*"*code}-***-***-{"".join(num[len(num)-4:])}'
            return f'***-***-{"".join(num[len(num)-4:])}'
