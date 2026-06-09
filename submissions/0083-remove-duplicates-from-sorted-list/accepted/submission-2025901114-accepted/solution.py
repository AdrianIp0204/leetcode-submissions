# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        res = ListNode(-999)
        tail = res
        while curr:
            if tail.val != curr.val:
                tail.next = ListNode(curr.val)
                tail = tail.next
            curr = curr.next
        if not head or res.next:
            return res.next
        return res
