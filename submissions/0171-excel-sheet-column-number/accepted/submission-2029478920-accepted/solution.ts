function titleToNumber(s: string): number {
    let res = 0;
    for (const c of s) {
        res = res * 26 + (c.charCodeAt(0) - 64);
    }
    return res
};
