class Solution {
public:
    int smallestEvenMultiple(int n) {
        if (n%2) {
            return 2*n;
        }else{
            return n;
        }
    }
};
