int smallestRangeI(int* nums, int numsSize, int k) {
    int MAX = 0;
    int MIN = 100001;
    for (int i = 0; i < numsSize; i++){
        if (nums[i] > MAX){
            MAX = nums[i];
        } 
        if (nums[i] < MIN){
            MIN = nums[i];
        }
    }
    if (MAX - MIN <= 2 * k){
        return 0;
    }
    return MAX - MIN - 2 * k;
}
