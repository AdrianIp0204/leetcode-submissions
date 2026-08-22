class Solution {
public:
    bool checkDivisibility(int n) {
        if (n == 0) return false;
        
        long long m = abs((long long)n);
        long long abs_n = m;
        long long s = 0;
        long long p = 1;
        
        while (abs_n != 0) {
            long long digit = abs_n % 10;
            s += digit;
            p *= digit;
            abs_n /= 10;
        }
        
        long long total = s + p;
        if (total == 0) return false;
        
        return (m % total == 0);
    }
};
