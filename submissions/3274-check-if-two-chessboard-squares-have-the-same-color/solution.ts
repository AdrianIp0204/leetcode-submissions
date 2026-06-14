function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    function check(cord: string): boolean {
        return (cord.charCodeAt(0) + Number(cord[1])) % 2 == 0
    }
    return (check(coordinate1) === check(coordinate2))
}
