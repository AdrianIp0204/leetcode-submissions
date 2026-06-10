function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    function check(cord: string): boolean {
        return "aceg".includes(cord[0])
    }
    function conv(cord1: string, cord2: string): number{
        return Number(cord1[1]) + Number(cord2[1])
    }
    if (check(coordinate1)) {
        if (check(coordinate2)) {
            return conv(coordinate1, coordinate2) % 2 == 0
        }
        return conv(coordinate1, coordinate2) % 2 == 1
    } else {
        if (check(coordinate2)) {
            return conv(coordinate1, coordinate2) % 2 == 1
        }
        return conv(coordinate1, coordinate2) % 2 == 0
    }
};
