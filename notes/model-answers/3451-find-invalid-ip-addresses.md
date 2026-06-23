# Find Invalid IP Addresses

- Pattern: string validation and frequency count
- Original attempt: [submissions/3451-find-invalid-ip-addresses](../../submissions/3451-find-invalid-ip-addresses/)

## Model Solution

```python
import pandas as pd


def find_invalid_ips(logs: pd.DataFrame) -> pd.DataFrame:
    def is_invalid(ip: str) -> bool:
        parts = ip.split(".")
        if len(parts) != 4:
            return True
        for part in parts:
            if not part.isdigit():
                return True
            if len(part) > 1 and part[0] == "0":
                return True
            if int(part) > 255:
                return True
        return False

    invalid = logs.loc[logs["ip"].apply(is_invalid), "ip"]
    return (
        invalid.value_counts()
        .rename_axis("ip")
        .reset_index(name="invalid_count")
        .sort_values(["invalid_count", "ip"], ascending=[False, False])
    )
```

## Why This Is The Model

The code validates each dotted string by checking the number of parts, leading
zeros, numeric content, and numeric range. Once invalid rows are isolated,
`value_counts` gives the frequency table and sorting determines the final order.

## Invariant

An IP enters the count only when at least one validation rule fails.

## Complexity

- Time: O(n * L + u log u), where `L` is IP string length and `u` is unique invalid IPs
- Space: O(n + u)

## Review Prompt

Which invalid case is missed if you only check that each number is at most 255?
