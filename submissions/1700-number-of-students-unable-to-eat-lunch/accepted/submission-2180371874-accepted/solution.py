from collections import deque
class Solution:
    def countStudents(self, students: list[int], sandwiches: list[int]) -> int:
        students = deque(students)
        left = len(students)
        for n in sandwiches:
            if n == students[0]:
                students.popleft()
                left -= 1
            else:
                c = 1
                while c < left:
                    students.append(students.popleft())
                    if n == students[0]:
                        left -= 1
                        students.popleft()
                        break
                    c += 1
                else:
                    return left
        return 0
