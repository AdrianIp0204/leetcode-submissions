# Delete the Middle Node of a Linked List

- Pattern: slow/fast pointers with predecessor
- Original attempt: [submissions/2095-delete-the-middle-node-of-a-linked-list](../../submissions/2095-delete-the-middle-node-of-a-linked-list/)

## Model Solution

```python
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head.next:
            return None

        prev = None
        slow = head
        fast = head

        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next

        prev.next = slow.next
        return head
```

## Why This Is The Model

The accepted submission counts nodes and copies every node except the middle
one. The standard linked-list model keeps the original nodes and removes the
middle by rewiring the predecessor.

## Invariant

When `fast` reaches the end, `slow` is at the middle node and `prev` is the node
immediately before it.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does the one-node list need to return `None` before the rewiring step?
