# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode()
        tail = res
        c = 0
        while head:
            if head.val == 0:
                tail.next = ListNode(c)
                tail = tail.next
                c = 0
            else:
                c += head.val
            head = head.next
        return res.next.next
