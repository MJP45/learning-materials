USE world;

SELECT * FROM country;

-- WHERE
SELECT * FROM country WHERE continent="North America";

-- COLUMNS
SELECT name, continent, population from country WHERE surfacearea>1000;

-- ALIAS
SELECT name country, continent, population from country;

-- COUNT
SELECT count(name) "Number of Countries" from country WHERE continent="North America";

-- DISTINCT
SELECT DISTINCT region from country;

-- BETWEEN
SELECT name, population from country WHERE population BETWEEN 500000 AND 1000000;

-- MATHS
SELECT name, ROUND(population/1000000, 2) FROM country WHERE continent = "South America";

-- LENGTH
select name, length(name) from country;

SELECT name, capital FROM country WHERE length(name) = length(capital)
