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

CREATE TABLE vehicles (
atvtype TEXT,
barrels08 REAL,
barrelsA08 REAL,
charge120 REAL,
charge240 REAL,
city08 REAL,
city08U REAL,
cityA08 REAL,
cityA08U REAL,
cityCD REAL,
cityE REAL,
cityUF REAL,
co2 REAL,
co2A REAL,
co2TailpipeAGpm REAL,
co2TailpipeGp REAL,
comb08 REAL,
comb08U REAL,
combA08 REAL,
combA08U REAL,
combE REAL,
combinedCD REAL,
combinedUF REAL,
cylinders REAL,
displ REAL,
drive TEXT,
engId REAL,
eng_dscr REAL,
evMotor REAL,
feScore REAL,
fuelCost08 REAL,
fuelCostA08 REAL,
fuelType REAL,
fuelType1 REAL,
fuelType2 REAL,
ghgScore REAL,
ghgScoreA REAL,
guzzle REAL,
highway08 REAL,
highway08U REAL,
highwayA08 REAL,
highwayA08U REAL,
highwayCD REAL,
highwayE REAL,
highwayUF REAL,
hlv REAL,
hpv REAL,
id REAL,
lv2 REAL,
lv4 REAL,
make TEXT,
mfrCode TEXT,
model TEXT,
mpgData REAL,
phevBlended REAL,
pv2 REAL,
pv4 REAL,
rangeA REAL,
rangeCityA REAL,
rangeHwyA REAL,
trans_dscr TEXT,
trany REAL,
UCity REAL,
UCityA REAL,
UHighway REAL,
UHighwayA REAL,
VClass TEXT,
year REAL,
youSaveSpend REAL,
sCharger TEXT,
tCharger TEXT,
c240Dscr TEXT,
charge240b  REAL,
c240bDscr REAL,
createdOn DATE,
modifiedOn DATE,
startStop REAL,
phevCity REAL,
phevHwy REAL,
phevComb REAL
)

ALTER TABLE models ADD FOREIGN KEY (make_id) REFERENCES makes(id);