# Palindrome Linked List

- Pattern: linked list to array comparison
- Original attempt: [submissions/0234-palindrome-linked-list](../../submissions/0234-palindrome-linked-list/)

## Model Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        arr = []
        current = head
        while current:
            arr.append(current.val)
            current = current.next
        return True if arr == arr[::-1] else False
```

## Why This Is The Model

The accepted solution is honest and reliable: it separates list traversal from palindrome logic, avoiding pointer mistakes.

## Invariant or Proof Idea

After traversal, `arr` contains the linked-list values in order, so the list is a palindrome exactly when `arr == arr[::-1]`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

What extra work would be needed to make this O(1) space?
