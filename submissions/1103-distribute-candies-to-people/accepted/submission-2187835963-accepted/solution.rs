impl Solution {
    pub fn distribute_candies(mut candies: i32, num_people: i32) -> Vec<i32> {
        let n = num_people as usize;
        let mut res = vec![0; n];
        let mut p = 0;
        let mut curr = 1;
        while candies > curr {
            res[p] += curr;
            p += 1;
            if p == n {
                p = 0;
            }
            candies -= curr;
            curr += 1;
        }
        res[p] += candies;
        return res;
    }
}
