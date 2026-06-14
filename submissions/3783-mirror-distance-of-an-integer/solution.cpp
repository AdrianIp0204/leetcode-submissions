class Solution {
public:
    int mirrorDistance(int n) {
        int m = n;
        int r = 0;
        while (n) {
            r = r*10 + n%10;
            n /= 10;
        }
        return abs(m-r);
    }
};
