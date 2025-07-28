/*
	POSTGRES lists of functions:
	https://www.postgresql.org/docs/current/functions.html
*/

/*
	ARRAY
*/
	SELECT * FROM film;
	SELECT title, special_features, special_features[1], special_features[3] FROM film;

	SELECT title, special_features FROM film WHERE special_features[2] IS NULL;
	SELECT title, special_features FROM film WHERE special_features[3] IS NULL;

	
	SELECT title, special_features FROM film 
	WHERE special_features[3] IS NULL AND special_features[2] IS NOT NULL;

/*
	LIMIT 
	OFSET
*/
	SELECT film_id, title, special_features FROM film ORDER BY 1 LIMIT 10;
	SELECT film_id, title, special_features FROM film ORDER BY 1 OFFSET 5 LIMIT 10;


/*
	DATES
	
	DATE_PART()
	https://neon.com/postgresql/postgresql-date-functions/postgresql-date_part
*/
	SELECT 
		rental_id, 
		rental_date, 
		date_part('day', rental_date),
		date_part('month', rental_date),
		date_part('year', rental_date),
		date_part('quarter', rental_date) quarter	
	FROM rental;

	SELECT 
		date_part('quarter', rental_date) quarter,
		count(*)
	FROM rental
	WHERE date_part('quarter', rental_date) in (1,3)
	GROUP BY 1
	ORDER BY 1;

/*
	DATES

	TO_CHAR()
	https://www.postgresql.org/docs/current/functions-formatting.html
*/
	SELECT * FROM rental;
	
	SELECT
		rental_date,
		to_char(rental_date, 'YYYY'),
		to_char(rental_date, 'MM'),
		to_char(rental_date, 'YYYY/MM'),
		to_char(rental_date, 'HH24:mm')
	FROM rental
	WHERE to_char(rental_date, 'HH24@mm') BETWEEN '11@10' AND '13@15';

	SELECT * FROM rental WHERE to_char(rental_date, 'YYYY-MM') = '2005-06';

/*
	JOIN
*/

	SELECT * FROM address; 
	SELECT * FROM city; -- city.city_id = address.city_id
	SELECT * FROM country; -- city.country_id = country.country_id

	SELECT
		a.address,
		a.district,
		c.city,
		cn.country
	FROM address a
	JOIN city c ON a.city_id = c.city_id
	JOIN country cn ON c.country_id = cn.country_id; 

/*
	1. one2one
	2. many2one or one2many
	3. many2many
*/

	SELECT * FROM film; -- film.film_id = film_actor.film_id
	SELECT * FROM film_actor; -- film_actor.actor_id = actor.actor_id
	SELECT * FROM actor;

	SELECT 
		 f.title,
		 a.first_name,
		 a.last_name
	FROM film f
	JOIN film_actor fa ON  f.film_id = fa.film_id
	JOIN actor a ON a.actor_id = fa.actor_id
	WHERE f.title = 'Academy Dinosaur'
	ORDER BY f.title;

	SELECT 
		f.title,
		count(*)
	FROM film f
	JOIN film_actor fa ON  f.film_id = fa.film_id
	JOIN actor a ON a.actor_id = fa.actor_id
	WHERE f.title LIKE 'A%'
	GROUP BY f.title 
	ORDER BY 2 DESC;
	
	
