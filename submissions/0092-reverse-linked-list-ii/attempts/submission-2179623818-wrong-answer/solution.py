# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: ListNode | None, left: int, right: int) -> ListNode | None:
        res = tail = ListNode()
        tmp = []
        while head:
            tmp.append(head.val)
            head = head.next
        tmp[left - 1], tmp[right - 1] = tmp[right - 1], tmp[left - 1]
        for n in tmp:
            tail.next = ListNode(n)
            tail = tail.next
        return res.next
