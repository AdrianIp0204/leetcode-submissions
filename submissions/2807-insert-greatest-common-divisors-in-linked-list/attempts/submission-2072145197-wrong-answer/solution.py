import math
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        seen = [head.val]
        res = ListNode()
        tail = res
        while head and head.next:
            seen.append(head.next.val)
            tail.next = ListNode(head.val)
            tail.next.next = ListNode(math.gcd(*seen))
            tail = tail.next.next
            head = head.next
        if head:
            tail.next = ListNode(head.val)
        return res.next
