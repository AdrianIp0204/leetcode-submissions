int smallestNumber(int n, int t) {
    for (int i = n; i <= 100; i++)
    {
        int j = i;
        int tmp = 1;
        while (j)
        {
            tmp *= j % 10;
            j /= 10;
        }
        if (tmp % t == 0)
        {
            return i;
        }
    }
    return -1;
}
