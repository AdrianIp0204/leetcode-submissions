# Check if Two Chessboard Squares Have the Same Color

- Pattern: parity on board coordinates
- Original attempt: [submissions/3274-check-if-two-chessboard-squares-have-the-same-color](../../submissions/3274-check-if-two-chessboard-squares-have-the-same-color/)

## Model Solution

```typescript
function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    function check(cord: string): boolean {
        return (cord.charCodeAt(0) + Number(cord[1])) % 2 == 0
    }
    return (check(coordinate1) === check(coordinate2))
}
```

## Why This Is The Model

The accepted TypeScript solution maps each coordinate to a boolean parity and compares the booleans.

## Invariant or Proof Idea

All squares with the same `(file + rank) % 2` parity have the same color.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does moving one square horizontally or vertically flip parity?
