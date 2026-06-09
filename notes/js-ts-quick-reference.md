# JavaScript / TypeScript Quick Reference

This is for LeetCode-sized functions, not frontend work.

## Arrays

```js
const a = [1, 2, 3];
a.length;
a.push(4);
a.pop();
a[0];
a.at(-1);
a.slice(1, 3);
a.sort((x, y) => x - y);
```

Useful methods:

- `map(fn)` transforms every item.
- `filter(fn)` keeps matching items.
- `reduce(fn, initial)` accumulates a value.
- `includes(x)` checks whether a value appears.
- `indexOf(x)` returns the first index or `-1`.
- `fill(x)` fills an array with one value.

Pitfall: JavaScript `sort()` sorts as strings unless you pass a comparator.

## Strings

```js
const s = "leetcode";
s.length;
s[i];
s.slice(1, 4);
s.split("");
```

Strings are immutable. Build an array when you need many changes, then `join("")`.

## Map

Use `Map` when Python would use a dictionary for arbitrary keys.

```js
const count = new Map();
count.set(x, (count.get(x) ?? 0) + 1);
count.has(x);
count.get(x);
count.delete(x);
```

For plain string keys, an object can work, but `Map` is usually clearer for LeetCode.

## Set

```js
const seen = new Set();
seen.add(x);
seen.has(x);
seen.delete(x);
seen.size;
```

Use `Set` for duplicate detection and "start of sequence" checks.

## Loops

```js
for (let i = 0; i < nums.length; i++) {}
for (const x of nums) {}
for (const [key, value] of map) {}
```

Prefer `for` loops when index movement matters. Prefer `for...of` when you only need values.

## Numbers

```js
Math.floor(x);
Math.ceil(x);
Math.max(...nums);
Math.min(...nums);
Number.isInteger(x);
```

Pitfall: all normal JS numbers are floating-point. For very large integer problems, use `BigInt`.

## TypeScript Basics

```ts
function twoSum(nums: number[], target: number): number[] {
  return [];
}

const count = new Map<number, number>();
const seen = new Set<string>();
```

Useful types:

- `number[]` - array of numbers.
- `string[]` - array of strings.
- `[number, number]` - fixed pair.
- `Map<string, number>` - string to number map.
- `Set<number>` - set of numbers.
- `TreeNode | null` - nullable object.

Start with correct function signatures. Fancy types can wait.
