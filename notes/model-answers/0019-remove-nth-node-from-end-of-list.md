# Remove Nth Node From End of List

- Pattern: linked list two pointers / dummy head
- Original attempt: [submissions/0019-remove-nth-node-from-end-of-list](../../submissions/0019-remove-nth-node-from-end-of-list/)

## Model Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        fast = dummy
        slow = dummy

        for _ in range(n):
            fast = fast.next

        while fast.next:
            fast = fast.next
            slow = slow.next

        slow.next = slow.next.next
        return dummy.next
```

## Why This Is The Model

The accepted attempt counts the length and rebuilds a new list without the
removed value. The model answer keeps the original nodes and uses a fixed gap of
`n` nodes between `fast` and `slow`, so `slow` lands just before the node to
remove.

## Invariant

After the initial advance, `fast` is `n` nodes ahead of `slow`. Moving them
together preserves that gap until `fast` reaches the tail.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the dummy head make deleting the original head node use the same code
as every other deletion?
