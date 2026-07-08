# Next LeetCode Problems

- Generated at: 2026-07-08T07:48:16.080Z
- Public solved count: 388
- Known solved by repo/public-recent evidence: 389
- Sync warning: repo appears 1 problems behind the public solved count. Run **Collect Submission History** before treating coverage as exact.

## Queue

1. [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) - Medium, Sliding window
   - Why: Good first serious window invariant: window size minus max frequency.
2. [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) - Medium, Monotonic stack
   - Why: Important upgrade from simple stack to 'next greater' structure.
3. [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) - Medium, Binary search invariant
   - Why: Builds real binary-search boundary discipline.
4. [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) - Medium, Grid DFS/BFS
   - Why: First must-have graph traversal shape.
5. [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) - Medium, Tree BFS
   - Why: Basic tree traversal with queue state.
6. [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) - Medium, Tree recursion bounds
   - Why: Tests whether you preserve constraints through recursion.
7. [207. Course Schedule](https://leetcode.com/problems/course-schedule/) - Medium, Topological sort
   - Why: First serious directed-graph dependency problem.
8. [198. House Robber](https://leetcode.com/problems/house-robber/) - Medium, Dynamic programming
   - Why: Smallest useful DP recurrence: choose/take state compression.
9. [322. Coin Change](https://leetcode.com/problems/coin-change/) - Medium, Dynamic programming
   - Why: Good test of bottom-up recurrence and impossible states.
10. [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium, DP / binary search
   - Why: A strong later target after simpler DP feels stable.

## Rule

- Do one new pattern problem, then write the Pattern, Key Idea, Mistake / Edge Case, and Complexity fields in the repo README.
- Tiny Easy problems are warmups. The main work should move into reusable patterns.
