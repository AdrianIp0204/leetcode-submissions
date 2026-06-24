# Bank Account Summary II

- Pattern: group aggregate / join / threshold filter
- Original attempt: [submissions/1587-bank-account-summary-ii](../../submissions/1587-bank-account-summary-ii/)

## Model Solution

```python
import pandas as pd


def account_summary(users: pd.DataFrame, transactions: pd.DataFrame) -> pd.DataFrame:
    balances = (
        transactions.groupby("account", as_index=False)["amount"]
        .sum()
        .rename(columns={"amount": "BALANCE"})
    )
    joined = users.merge(balances, on="account")
    rich_accounts = joined[joined["BALANCE"] > 10000]

    return rich_accounts[["name", "BALANCE"]].rename(columns={"name": "NAME"})
```

## Why This Is The Model

Each account can have many transaction rows, so the balance must be computed
before comparing with the threshold. The model answer names the aggregated
balance once, joins it to the user names, filters balances above 10000, and then
projects the required output shape.

## Invariant

After the groupby, each account appears at most once with its total transaction
amount. The final filter keeps exactly the accounts whose total balance is
greater than 10000.

## Complexity

- Time: O(t + u) expected for grouping, joining, and filtering
- Space: O(t + u)

## Review Prompt

Why would filtering individual transaction rows before grouping give the wrong
answer for accounts with several smaller deposits?
