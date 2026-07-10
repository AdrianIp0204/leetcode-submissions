# Write your MySQL query statement below
select b.product_name, year, price
from Sales a
join Product b
    on a.product_id = b.product_id
