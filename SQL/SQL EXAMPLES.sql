USE world;
SELECT name, region FROM country;

-- Count
SELECT COUNT(*) FROM country;

-- WHERE
SELECT name, population FROM country WHERE name LIKE "%France%";
SELECT count(*) FROM country WHERE continent LIKE "%America%";

-- IN
SELECT name, continent, region FROM country WHERE region IN ("Caribbean", "Australia and New Zealand");

-- BETWEEN
SELECT name, surfacearea FROM country WHERE surfacearea BETWEEN 500000 AND 1000000;

-- MAFS
SELECT name, ROUND(population/1000000, 2) FROM country WHERE continent = "South America";

-- OR, XOR and AND
-- inclusive OR
SELECT name, population, surfacearea FROM country WHERE surfacearea >= 3000000 OR population >= 250000000;
-- Exlusive or
SELECT name, population, surfacearea FROM country WHERE surfacearea >= 3000000 XOR population >= 250000000;
-- Both
SELECT name, population, surfacearea FROM country WHERE surfacearea >= 3000000 AND population >= 250000000;

-- LENGTH
SELECT name, LENGTH(name) FROM country;
SELECT name, capital, LENGTH(name), LENGTH(capital) FROM country WHERE (LENGTH(name) = LENGTH(capital));