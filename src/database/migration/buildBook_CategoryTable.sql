BEGIN;

DROP TABLE IF EXISTS book_category CASCADE;

CREATE TABLE book_category(
    id SERIAL ,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE,
    book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT book_category_pkey PRIMARY KEY (category_id , book_id)
);

COMMIT;
