# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        res = ListNode()
        tail = res

        while any(lists):
            curr = min(n.val for n in lists if n)

            for i in range(len(lists)):
                if lists[i] and lists[i].val == curr:
                    tail.next = ListNode(lists[i].val)
                    lists[i] = lists[i].next
                    tail = tail.next

        return res.next
