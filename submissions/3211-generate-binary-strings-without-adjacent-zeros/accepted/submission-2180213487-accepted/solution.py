class Solution:
    def validStrings(self, n: int) -> List[str]:
        if n == 1:
            return ['0', '1']
        
        res = []

        def search(path):
            if len(path) == n:
                res.append(''.join(path))
                return
            
            path.append('1')
            search(path)
            path.pop()

            if not path or path[-1] == '1':
                path.append('0')
                search(path)
                path.pop()
            
        
        search([])
        return res
