SELECT role, COUNT(*) AS count
FROM users
GROUP BY role;