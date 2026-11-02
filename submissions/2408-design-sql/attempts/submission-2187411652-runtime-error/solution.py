class SQL:

    def __init__(self, names: list[str], columns: list[int]):
        self.ids = {name:1 for name in names}
        self.database = {name:{} for name in names}
        self.lengths = {name:column for name, column in zip(names, columns)}

    def ins(self, name: str, row: list[str]) -> bool:
        if name not in self.database:
            return False
        if len(row) != self.lengths[name]:
            return False
        
        self.database[name][self.ids[name]] = row
        self.ids[name] += 1

        return True

    def rmv(self, name: str, rowId: int) -> None:
        if name in self.database:
            self.database[name].pop(rowId, None)

    def sel(self, name: str, rowId: int, columnId: int) -> str:
        if columnId < 1 or columnId > self.lengths[name]:
            return '<null>'
        table = self.database.get(name, None)
        if not table:
            return '<null>'
        row = table.get(rowId, None)
        if not row:
            return '<null>'
        return row[columnId-1]


    def exp(self, name: str) -> list[str]:
        table = self.database.get(name, None)
        if not table:
            return []
        out = []
        for row in table.items():
            out.append(f'{row[0]},{",".join(row[1])}')
        return out

        


# Your SQL object will be instantiated and called as such:
# obj = SQL(names, columns)
# param_1 = obj.ins(name,row)
# obj.rmv(name,rowId)
# param_3 = obj.sel(name,rowId,columnId)
# param_4 = obj.exp(name)
