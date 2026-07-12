# Write your MySQL query statement below
select product_id, min(year) as first_year, quantity, price
from sales
group by product_id
