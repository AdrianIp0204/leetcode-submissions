class Solution:
    def triangleType(self, n: List[int]) -> str:
        a,b,c=n[0],n[1],n[2]
        if a==b==c:
            return "equilateral"
        elif a+b>c and b+c>a and a+c>b:
            if a==b or b==c or c==a:
                return "isosceles"
            return "scalene"
        return "none"
