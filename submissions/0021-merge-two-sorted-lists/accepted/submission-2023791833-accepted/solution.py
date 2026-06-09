# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        curr1 = l1
        curr2 = l2
        res = ListNode()
        tail = res

        while curr1 and curr2:
            if curr1.val < curr2.val:
                tail.next = ListNode(curr1.val)
                curr1 = curr1.next
                tail = tail.next
            else:
                tail.next = ListNode(curr2.val)
                curr2 = curr2.next
                tail = tail.next

        while curr1:
            tail.next = ListNode(curr1.val)
            curr1 = curr1.next
            tail = tail.next

        while curr2:
            tail.next = ListNode(curr2.val)
            curr2 = curr2.next
            tail = tail.next 
        
        return res.next
