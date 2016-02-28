\connect autocross_db;


INSERT INTO makes (name, logo_url, year_created) VALUES
('Toyota', 'toyota.jpg', 1964);



INSERT INTO models (name, year_firstMade, year_lastMade, stock_photo_url, make_id) VALUES
('4Runner', 1995, 2017, '4runner.jpg', 1);



COPY vehicles FROM './vehicles.csv' DELIMITER ',' CSV;
