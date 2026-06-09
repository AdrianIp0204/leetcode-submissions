# Merge Two Sorted Lists

- Pattern: linked list merge / dummy head
- Original attempt: [submissions/0021-merge-two-sorted-lists](../../submissions/0021-merge-two-sorted-lists/)

## Model Solution

```python
class Solution:
    def mergeTwoLists(
        self,
        list1: Optional[ListNode],
        list2: Optional[ListNode],
    ) -> Optional[ListNode]:
        dummy = ListNode()
        tail = dummy

        while list1 and list2:
            if list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        tail.next = list1 or list2
        return dummy.next
```

## Why This Is The Model

The accepted solution creates new nodes, which is clear but uses extra memory.
The model answer reuses the existing nodes and only changes `next` pointers.
The dummy head avoids a special case for the first output node.

## Invariant

`dummy.next` starts the merged list, and `tail` always points to the last node in
that merged list. The remaining nodes in `list1` and `list2` are still sorted.

## Complexity

- Time: O(n + m)
- Space: O(1)

## Review Prompt

What bug appears if you move `tail = tail.next` before assigning `tail.next`?
