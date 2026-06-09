# Reverse Linked List

- Pattern: linked list pointer rewiring
- Original attempt: [submissions/0206-reverse-linked-list](../../submissions/0206-reverse-linked-list/)

## Model Solution

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head

        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        return prev
```

## Why This Is The Model

This is the clean iterative linked-list reversal. The important habit is saving
`curr.next` before overwriting it, then moving the two pointers forward.

## Invariant

`prev` is the head of the already-reversed part. `curr` is the head of the
not-yet-reversed part.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

What part of the list is lost if you assign `curr.next = prev` before saving
`curr.next`?
