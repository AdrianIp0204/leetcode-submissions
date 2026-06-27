# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        ans = ListNode()
        tail = ans
        curr = head
        while curr and curr.next:
            tail.next = ListNode(curr.next.val)
            tail.next.next = ListNode(curr.val)
            tail = tail.next.next
            curr = curr.next.next
        if curr:
            tail.next = ListNode(curr.val)
        return ans.next
