# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        res = ListNode()
        tail = res
        while head:
            if head.val != val:
                tail.next = ListNode(head.val)
                tail =tail.next
            head = head.next
        return res.next
