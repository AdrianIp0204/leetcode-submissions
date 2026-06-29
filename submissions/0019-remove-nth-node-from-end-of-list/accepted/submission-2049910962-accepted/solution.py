# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        curr, curr2 = head, head
        res = ListNode(0)
        tail = res
        l = 0
        c = 0
        while curr:
            l += 1
            curr = curr.next
        l -= n
        while curr2:
            if c != l:
                tail.next = ListNode(curr2.val)
                tail = tail.next
            curr2 = curr2.next
            c += 1
        return res.next
