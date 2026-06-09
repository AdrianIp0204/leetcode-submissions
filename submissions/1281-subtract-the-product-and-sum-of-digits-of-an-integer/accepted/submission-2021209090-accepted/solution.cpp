class Solution {
public:
    int subtractProductAndSum(int n) {
        int s=0;
        int p=1;
        int t;
        while (n!=0) {
            t=n%10;
            s+=t;
            p*=t;
            n/=10;
        }
        return p-s;
    }
};
