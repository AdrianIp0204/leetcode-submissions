# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        tmp = []
        curr = head
        res = ListNode()
        tail = res
        
        while curr:
            tmp.append(curr.val)
            curr = curr.next
        l =len(tmp)
        for i in range(0, l, k):
            if i+k <= l:
                tmp[i:i+k] = tmp[i:i+k][::-1]
            
        for i in tmp:
            tail.next = ListNode(i)
            tail = tail.next
        return res.next
