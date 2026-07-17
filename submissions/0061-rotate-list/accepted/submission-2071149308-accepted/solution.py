# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from collections import deque
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        tmp = deque()
        curr = head
        while curr:
            tmp.append(curr.val)
            curr = curr.next
        tmp.rotate(k)
        res = ListNode()
        tail = res
        for i in tmp:
            tail.next = ListNode(i)
            tail = tail.next
        return res.next
