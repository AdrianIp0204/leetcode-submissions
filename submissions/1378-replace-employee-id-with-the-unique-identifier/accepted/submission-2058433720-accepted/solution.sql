# Write your MySQL query statement below
select unique_id, name from Employees e left outer join EmployeeUNI u on e.id = u.id;
