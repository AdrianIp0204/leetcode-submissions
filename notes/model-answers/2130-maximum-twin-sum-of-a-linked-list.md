# Maximum Twin Sum of a Linked List

- Pattern: slow/fast pointers + reverse first half
- Original attempt: [submissions/2130-maximum-twin-sum-of-a-linked-list](../../submissions/2130-maximum-twin-sum-of-a-linked-list/)

## Model Solution

```python
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = fast = head
        prev = None

        while fast and fast.next:
            fast = fast.next.next
            nxt = slow.next
            slow.next = prev
            prev = slow
            slow = nxt

        ans = 0
        left, right = prev, slow
        while left:
            ans = max(ans, left.val + right.val)
            left = left.next
            right = right.next
        return ans
```

## Why This Is The Model

The accepted solution reverses the first half while finding the midpoint, then walks the reversed first half beside the second half to compare twin nodes.

## Invariant or Proof Idea

After the slow/fast loop, `prev` is the reversed first half and `slow` starts the second half, so corresponding nodes are twins.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does reversing during the midpoint scan avoid needing a separate stack?
