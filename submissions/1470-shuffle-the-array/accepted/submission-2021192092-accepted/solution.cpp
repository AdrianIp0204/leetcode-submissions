class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        vector<int> x = {} ;
        for (int i=0; i<n; i++){
            x.push_back(nums[i]);
            x.push_back(nums[n+i]);
        }
        return x;
    }
};
