# Add Two Numbers

- Pattern: linked list / carry simulation
- Original attempt: [submissions/0002-add-two-numbers](../../submissions/0002-add-two-numbers/)

## Model Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        cur = dummy
        carry = 0

        while l1 or l2 or carry:
            total = carry

            if l1:
                total += l1.val
                l1 = l1.next
            if l2:
                total += l2.val
                l2 = l2.next

            carry, digit = divmod(total, 10)
            cur.next = ListNode(digit)
            cur = cur.next

        return dummy.next
```

## Why This Is The Model

The accepted attempt converts both linked lists into Python integers, adds them,
then rebuilds the answer. That works in Python, but it skips the linked-list
skill the problem is meant to teach and depends on arbitrary-size integers.

The model answer performs elementary column addition directly on the lists. It
handles different lengths and the final carry in the same loop.

## Invariant

After each iteration, the output list contains the correct low-order digits for
all nodes already consumed. `carry` is exactly the carry that should be applied
to the next higher digit.

## Complexity

- Time: O(max(m, n))
- Space: O(max(m, n)) for the output list

## Review Prompt

Why does the loop continue while `carry` is nonzero even after both lists end?
