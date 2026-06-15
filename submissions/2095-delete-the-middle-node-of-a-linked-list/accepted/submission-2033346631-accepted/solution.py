# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode()
        tail = res
        curr1 = head
        curr2 = head
        c = 0
        m = 1
        while curr1:
            c += 1
            curr1 = curr1.next
        m = c//2
        c = 0
        while curr2:
            if c != m:
                tail.next = ListNode(curr2.val)
                tail = tail.next
            curr2 = curr2.next
            c += 1
        return res.next
