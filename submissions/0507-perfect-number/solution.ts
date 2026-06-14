function checkPerfectNumber(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    let res = 1;
    const l = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= l; i++) {
        if (num % i === 0) {
            res += i;
            if (i !== num / i) {
                res += num / i;
            }
        }
    }
    return res === num;
}
