# Remove Duplicates from Sorted List

- Pattern: sorted linked-list in-place scan
- Original attempt: [submissions/0083-remove-duplicates-from-sorted-list](../../submissions/0083-remove-duplicates-from-sorted-list/)

## Model Solution

```python
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head

        while current and current.next:
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next

        return head
```

## Why This Is The Model

Because the list is sorted, duplicate values are adjacent. The accepted attempt
builds a fresh list of kept values, which is correct but spends extra memory and
needs a dummy sentinel. The model answer rewires `next` pointers and keeps the
original nodes.

## Invariant

Before `current`, the list contains exactly one node for each seen value. If
`current.next` has the same value, it is a duplicate and can be skipped without
moving `current`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why should `current` stay in place after deleting `current.next`?
