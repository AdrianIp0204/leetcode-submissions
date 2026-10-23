# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: ListNode | None, left: int, right: int) -> ListNode | None:
        res = tail = ListNode()
        tmp = []
        l, r = left - 1, right - 1
        while head:
            tmp.append(head.val)
            head = head.next
        while l < r:
            tmp[l], tmp[r] = tmp[r], tmp[l]
            l += 1
            r -= 1
        for n in tmp:
            tail.next = ListNode(n)
            tail = tail.next
        return res.next
