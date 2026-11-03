class Solution:
    def numUniqueEmails(self, emails: list[str]) -> int:
        seen = set()
        for email in emails:
            no_plus = True
            at = False
            domain = []
            name = []
            for c in email:
                if c == '@':
                    at = True
                elif c == '+':
                    no_plus = False
                elif at:
                    domain.append(c)
                elif no_plus and c != '.':
                    name.append(c)
            seen.add((tuple(name),tuple(domain)))
        return len(seen)
