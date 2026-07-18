import math
from collections import deque
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        seen = deque([1, head.val])
        res = ListNode()
        tail = res
        while head and head.next:
            seen.popleft()
            seen.append(head.next.val)
            tail.next = ListNode(head.val)
            tail.next.next = ListNode(math.gcd(*seen))
            tail = tail.next.next
            head = head.next
        if head:
            tail.next = ListNode(head.val)
        return res.next
