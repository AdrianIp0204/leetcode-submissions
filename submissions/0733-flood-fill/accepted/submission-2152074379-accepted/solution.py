class Solution:
    def floodFill(self, image: list[list[int]], sr: int, sc: int, color: int) -> list[list[int]]:
        height, width = len(image), len(image[0])
        visited = set()

        original = image[sr][sc]

        def search(h, w):
            visited.add((h, w))
            if image[h][w] == original:

                for i in [h - 1, h + 1]:
                    if 0 <= i < height and (i, w) not in visited:
                        search(i, w)
                        

                for j in [w - 1, w + 1]:
                    if 0 <= j < width and (h, j) not in visited:
                        search(h, j)

                image[h][w] = color


        search(sr, sc)

        return image
