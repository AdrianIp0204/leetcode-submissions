# Find Customer Referee

- Pattern: SQL filter with NULL handling
- Original attempt: [submissions/0584-find-customer-referee](../../submissions/0584-find-customer-referee/)

## Model Solution

```sql
SELECT name
FROM Customer
WHERE referee_id != 2 OR referee_id IS NULL;
```

## Why This Is The Model

Rows should be kept when the referee is someone other than `2`, and also when
there is no referee. The explicit `IS NULL` branch matters because SQL's
three-valued logic does not treat `NULL != 2` as true.

## Invariant

Every returned customer either has no referee or has a referee id that is not
`2`; every customer referred by `2` is excluded.

## Complexity

- Time: O(n)
- Space: O(1) beyond the result set

## Review Prompt

Why is `referee_id != 2` alone not enough to include customers with no referee?
