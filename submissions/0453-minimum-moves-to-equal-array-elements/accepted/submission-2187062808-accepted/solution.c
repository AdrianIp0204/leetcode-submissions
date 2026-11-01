int minMoves(int* nums, int numsSize) {
    int SUM = 0;
    int MIN = 1000000001;
    for (int i = 0; i < numsSize; i++) {
        SUM += nums[i];
        if (nums[i] < MIN) {
            MIN = nums[i];
        }
    }
    return SUM - numsSize * MIN;
}
