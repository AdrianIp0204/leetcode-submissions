class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l, r = 0, len(matrix[0]) - 1
        while l < r:
            mid = (l+r) // 2
            if matrix[0][mid] > target:
                r = mid
            elif matrix[0][mid] < target:
                l = mid + 1
            else:
                return True
        col = l - 1

        l, r = 0, len(matrix)
        while l <= r:
            mid = (l+r) // 2
            if matrix[mid][col] > target:
                r = mid - 1
            elif matrix[mid][col] < target:
                l = mid + 1
            else:
                return True
        return False
