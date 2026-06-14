function checkPerfectNumber(num: number): boolean {
    if (num === 1) {
        return false
    }
    let res = 1;
    const l = Number(Math.sqrt(num)) + 1;
    for (let i = 2; i < l; i++){
        if (num % i === 0) {
            res += i + num/i;
        }
    }
    if (res === num) {
        return true
    }
    return false
};
