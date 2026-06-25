# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        odd, even = ListNode(), ListNode()
        tail1, tail2 = odd, even
        c = 1
        while curr:
            if c%2:
                tail1.next = ListNode(curr.val)
                tail1 = tail1.next
            else:
                tail2.next = ListNode(curr.val)
                tail2 = tail2.next
            c += 1
            curr = curr.next
        tail1.next = even.next
        return odd.next
