CREATE TABLE film
(
    id SERIAL PRIMARY KEY,
    filmName VARCHAR(255),
    yearOfCreation VARCHAR(255)
);



CREATE TABLE genre
(
    id SERIAL PRIMARY KEY,
    genreName VARCHAR(255)
);



CREATE TABLE film_genre
(
    id SERIAL PRIMARY KEY,
    filmName_id INTEGER,
    genreName_id INTEGER,
    FOREIGN KEY (filmName_id) REFERENCES film (id),
    FOREIGN KEY (genreName_id) REFERENCES genre (id)
);