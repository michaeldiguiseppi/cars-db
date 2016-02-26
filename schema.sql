DROP DATABASE IF EXISTS autocross_db;
CREATE DATABASE autocross_db;

\connect autocross_db;

DROP TABLE IF EXISTS makes;
DROP TABLE IF EXISTS models;

CREATE TABLE makes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(255),
    year_created INT CHECK(year_created BETWEEN 1900 AND 2017);
);

CREATE TABLE models (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    year_firstMade INT CHECK(year_firstMade BETWEEN 1900 AND 2017) CHECK(year_firstMade < year_lastMade),
    year_lastMade INT CHECK(year_lastMade BETWEEN 1900 AND 2017) CHECK(year_lastMade > year_firstMade),
    stock_photo_url VARCHAR(255),
    make_id INT NOT NULL
);


ALTER TABLE models ADD FOREIGN KEY (make_id) REFERENCES makes(id);