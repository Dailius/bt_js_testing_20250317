/*
	LEFT/RIGHT JOINS
	and more
*/

	SELECT * FROM language; -- language.language_id = film.language_id
	SELECT * FROM film;

-- INNER JOIN	
	SELECT
		f.title,
		l.name
	FROM film f
	JOIN language l ON f.language_id = l.language_id
	WHERE l.name = 'Italian';

-- LEFT JOIN	
	SELECT
		f.title,
		l.name
	FROM film f
	LEFT JOIN language l ON f.language_id = l.language_id;

-- RIGHT JOIN	
	SELECT
		f.title,
		l.name
	FROM film f
	RIGHT JOIN language l ON f.language_id = l.language_id;

-- RIGHT JOIN exclusive	
	SELECT
		f.title,
		l.name
	FROM film f
	RIGHT JOIN language l ON f.language_id = l.language_id
	WHERE f.title IS NULL;

/*
	Subqueries
	separate Selects used in SELECT, FROM, WHERE
*/

	-- Subquery in SELECT
	SELECT * FROM payment;
	SELECT avg(amount) FROM payment;

	SELECT 
		customer_id, 
		(SELECT avg(amount) FROM payment), 
		(SELECT max(amount) FROM payment) 
	FROM payment;

	-- Subquery in FROM

	SELECT customer_id, count(*) total_count, sum(amount) total_sum 
	FROM payment 
	GROUP BY 1 
	-- HAVING total_count >= 20 -- bad code part
	HAVING count(*) >= 20
	ORDER BY 1;

	SELECT
		*
	FROM (
		SELECT customer_id, count(*) total_count, sum(amount) total_sum FROM payment GROUP BY 1 ORDER BY 1
	)some_new_name
	WHERE total_count >= 20;

	-- Subquery in WHERE

	SELECT 
		*
	FROM payment
	WHERE amount >= (SELECT avg(amount) FROM payment);
	
/*
	CREATE TABLE
	https://www.postgresql.org/docs/current/sql-createtable.html

	DATA TYPES
	https://www.postgresql.org/docs/current/datatype.html
	https://neon.com/docs/data-types/decimal
*/	

	CREATE TABLE IF NOT EXISTS table_name(
		table_id SERIAL PRIMARY KEY,
		some_text_A VARCHAR(255),
		some_text_B VARCHAR(50) NOT NULL,
		email VARCHAR(50) UNIQUE NOT NULL,
		some_numbe INT NOT NULL,
		created_at TIMESTAMP NOT NULL
	);

	CREATE TABLE IF NOT EXISTS my_actor AS (SELECT * FROM actor);
	
	CREATE TEMPORARY TABLE IF NOT EXISTS my_actor_tmp AS (SELECT * FROM actor);

	SELECT * FROM my_actor_tmp;

/*
	DROP TABLE 
	https://www.postgresql.org/docs/current/sql-droptable.html
*/
	DROP TABLE my_actor;
	DROP TABLE my_actor_tmp;
	
/*
	ALTER TABLE
	https://www.postgresql.org/docs/current/sql-altertable.html
	https://www.postgresql.org/docs/current/ddl-alter.html
*/

	-- add column
	ALTER TABLE table_name ADD COLUMN description text;	
	SELECT * FROM table_name;

	-- delete column
	ALTER TABLE table_name DROP COLUMN description;
	SELECT * FROM table_name;

	-- set up column property
	ALTER TABLE table_name ADD COLUMN description text;	
	ALTER TABLE table_name ALTER COLUMN description SET NOT NULL;
	ALTER TABLE table_name ALTER COLUMN description DROP NOT NULL;

/*
	INSERT INTO
	https://www.postgresql.org/docs/current/sql-insert.html
	https://www.postgresql.org/docs/current/dml-insert.html
*/

	ALTER TABLE table_name RENAME COLUMN some_numbe TO some_number;

	INSERT INTO table_name (some_text_a, some_text_b, email, some_number, created_at)
	VALUES ('asdlifhjlikasdf', 'iiiiiiiiiii', 'demo@demo.com', 456, '2025-07-29' );

	INSERT INTO table_name (some_text_a, some_text_b, email, some_number, created_at)
	VALUES ('asdlifhjlikasdf', 'iiiiiiiiiii', 'demo@demo.lt', 456, '2025-07-29' );

	INSERT INTO table_name (some_text_a, some_text_b, email, some_number, created_at)
	VALUES 
		('dasf', 'iiiiiiiiiii', 'demo@yahoo.lt', 456, '2025-07-29' ),
		('asdlifhf75646sdfjlikasdf', 'iiiiiiiiiii', 'demo05@demo.lt', 456, '2025-07-29' ),
		('pppppp', 'iiiiiiiiiii', 'my@demo.lt', 456, '2025-07-30 12:45:15' ),
		('asdlifhjlikasdf', 'iiiiiiiiiii', 'demo@gmail.lt', 456, '2025-07-29' );

	SELECT * FROM table_name;
	
/*
	UDATE
	https://www.postgresql.org/docs/current/sql-update.html
*/

	UPDATE table_name
	SET
		some_number = 555,
		some_text_a = 'Demo text'
	WHERE table_id = 6;

	UPDATE table_name
	SET
		some_text_a = 'new text';

	SELECT * FROM table_name;

	UPDATE table_name
	SET
		some_number = 555,
		some_text_a = 'Demo text'
	WHERE table_id in (1,5,8);


	