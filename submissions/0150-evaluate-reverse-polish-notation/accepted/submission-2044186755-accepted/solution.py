class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for n in tokens:
            if n not in "+-*/":
                stack.append(int(n))
            else:
                b = stack.pop()
                a = stack.pop() 
                if n == "+":
                    stack.append(a + b)
                elif n == "-":
                    stack.append(a - b)
                elif n == "*":
                    stack.append(a * b)
                else:
                    stack.append(int(a / b))    
        return stack[0]
