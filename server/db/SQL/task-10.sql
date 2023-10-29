UPDATE users
SET balance = balance + (order_total * 0.1) -- Зарахування 10% кешбеку
FROM (
    SELECT u.id AS user_id, SUM(o.total) AS order_total
    FROM users u
    JOIN offers of ON u.id = of.customer_id
    JOIN contests c ON of.contest_id = c.id
    WHERE u.role = 'customer'
      AND c.creation_date BETWEEN '2023-12-25' AND '2024-01-14'
    GROUP BY u.id
) AS order_totals
WHERE users.id = order_totals.user_id;