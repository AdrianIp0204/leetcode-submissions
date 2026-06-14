function diStringMatch(s: string): number[] {
    let upper = s.length;
    let lower = 0;
    let res = [];
    for (const w of s) {
        if (w === "I") {
            res.push(lower);
            lower++;
        } else {
            res.push(upper);
            upper--;
        }
    }
    res.push(upper);
    return res
};
