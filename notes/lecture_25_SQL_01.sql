-- komentaras

/*
ZOOM IN: SHIFT +CTRL + '+/='
ZOOM OUT: CTRL + '-'
Cooment line: CTRL + '/' 
*/

-- SELECT * FROM actor;

/*
	SELECT
*/

SELECT 'Sveikas', 'Pasauli';
SELECT 'Hello', 'World';
SELECT 'Bonjour', 'la Monde';

SELECT 'Sveikas', 'Pasauli'
UNION
SELECT 'Hello', 'World'
UNION
SELECT 'Bonjour', 'la Monde';

SELECT 'Sveikas' AS "Stulpelis 01", 'Pasauli' AS Stulpelis02, '!' "Stulpelis03"
UNION 
SELECT 'Hello', null, null
UNION
SELECT 'Bonjour', 'la Monde', null;

SELECT * FROM actor;
SELECT * FROM payment;

SELECT actor_id, last_name FROM actor;
SELECT actor_id AS id, last_name pavarde FROM actor;

SELECT last_name, LOWER(last_name), UPPER(last_name) FROM actor;
SELECT DISTINCT last_name, LOWER(last_name), UPPER(last_name) FROM actor;

/*
	WHERE
*/

SELECT * FROM actor  WHERE actor_id = 1;
SELECT * FROM actor  WHERE first_name = 'Penelope';

/*
	ORDER BY
*/

SELECT * FROM actor ORDER BY first_name;
SELECT * FROM actor ORDER BY first_name ASC;
SELECT * FROM actor ORDER BY first_name DESC;

SELECT * FROM actor WHERE first_name = 'Penelope' ORDER BY actor_id desc;
SELECT * FROM actor WHERE first_name = 'Penelope' ORDER BY first_name DESC, last_name ASC;

/*
	logical operators:
	>,<, >=, <=, =, != or <>

	AND, OR
	&&, ||
*/

SELECT * FROM actor 
WHERE first_name = 'Penelope' OR first_name = 'Adam' OR first_name = 'Joe'
ORDER BY first_name DESC, last_name ASC;

SELECT * FROM payment; 

SELECT DISTINCT amount FROM payment ORDER BY amount DESC; 

-- 7.99 iki 9.99
SELECT * FROM payment WHERE amount >= 7.99 AND amount <= 9.99 ORDER BY amount DESC; 

-- customers 341, 380, 454

SELECT * FROM payment
WHERE amount >= 7.99 AND amount <= 9.99 AND (customer_id = 341 OR customer_id = 380 OR customer_id = 454)
-- ORDER BY customer_id ASC, amount DESC; 
ORDER BY 2 ASC, 5 DESC; 

/*
	BETWEEN AND
*/

SELECT * FROM payment WHERE amount >= 7.99 AND amount <= 9.99 ORDER BY amount DESC; 
SELECT * FROM payment WHERE amount BETWEEN 7.99 AND 9.99 ORDER BY amount DESC; 

SELECT * FROM payment WHERE amount < 7.99 OR amount > 9.99 ORDER BY amount asc; 
SELECT * FROM payment WHERE amount NOT BETWEEN 7.99 AND 9.99 ORDER BY amount DESC; 

/*
	IN
*/

SELECT * FROM payment
-- WHERE amount >= 7.99 AND amount <= 9.99 AND (customer_id = 341 OR customer_id = 380 OR customer_id = 454)
WHERE amount >= 7.99 AND amount <= 9.99 AND customer_id IN(341, 454, 380)
ORDER BY 2 ASC, 5 DESC; 

/*
	LIKE
*/

SELECT * FROM actor  WHERE first_name = 'Penelope';
SELECT * FROM actor  WHERE first_name = 'P';
SELECT DISTINCT first_name, last_name FROM actor  WHERE first_name LIKE 'P%';
SELECT DISTINCT first_name FROM actor  WHERE first_name LIKE 'A%';
SELECT DISTINCT first_name FROM actor  WHERE first_name LIKE '%e';

SELECT city FROM city WHERE city LIKE '% %';
SELECT city FROM city WHERE city LIKE '% %' AND city NOT LIKE '% % %' AND city NOT LIKE '%-%' AND city NOT LIKE '% (%)';

SELECT city FROM city WHERE city LIKE '_e%';
SELECT city FROM city WHERE city LIKE '%e__';

/*
	Agrtegation functions:
*/

SELECT * FROM payment;
SELECT COUNT(payment_id) FROM payment;
SELECT COUNT(*) FROM payment;
 
SELECT COUNT(*), SUM(amount), AVG(amount), MIN(amount), MAX(amount) FROM payment WHERE customer_id = 341;
 
SELECT MAX(payment_id), MAX(payment_id) + 1 FROM payment;
SELECT customer_id + staff_id, customer_id / staff_id, customer_id * staff_id FROM payment;
 
/*
	GROUP BY
	HAVING
*/
 
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY count DESC;
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY 2 DESC;
 
SELECT customer_id, amount, COUNT(*), SUM(amount), MIN(amount), MAX(amount)
FROM payment
WHERE customer_id IN (148, 526, 144)
GROUP BY customer_id, amount
ORDER BY 1 ASC, 2 DESC;
 
SELECT customer_id, amount, COUNT(*), SUM(amount), MIN(amount), MAX(amount)
FROM payment
WHERE customer_id IN (148, 526, 144)
GROUP BY customer_id, amount
HAVING COUNT(*) > 1 AND SUM(amount) BETWEEN 20 AND 30
ORDER BY 1 ASC, 2 DESC;

