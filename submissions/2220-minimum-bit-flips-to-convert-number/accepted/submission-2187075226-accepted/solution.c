int minBitFlips(int start, int goal) {
    int n = start ^ goal;
    int res = 0;
    while (n) {
        n &= n - 1;
        res++;
    }
    return res;
}
