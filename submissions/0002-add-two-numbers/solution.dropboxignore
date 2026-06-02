# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        n1 = []
        n2 = []
        out = []
        result = []
        while l1 is not None:
            n1.append(str(l1.val))
            l1 = l1.next
        while l2 is not None:
            n2.append(str(l2.val))
            l2 = l2.next
        n1.reverse()
        n2.reverse()
        num1 = "".join(n1)
        num2 = "".join(n2)


        s = int(num1) + int(num2)
        out = list(str(s))

        out.reverse()

        fin = ListNode(int(out[0]))
        tail = fin

        for i, x in enumerate(out):
            if i == 0:
                pass
            else:
                tail.next = ListNode(int(x))
                tail = tail.next

        return fin
