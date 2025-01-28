const clientQuery = `
CREATE TABLE IF NOT EXISTS client (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
name VARCHAR NOT NULL,
last_name VARCHAR NOT NULL,
phone VARCHAR NOT NULL,
email VARCHAR NOT NULL);
`;

const vehicleQuery = `
CREATE TABLE IF NOT EXISTS vehicle (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
name VARCHAR,
model VARCHAR,
engine_size FLOAT,
engine_size_measurement_type_id INTEGER,
vin_code VARCHAR,
make VARCHAR,
fuel_type_id INTEGER,
odometer INTEGER,
fabrication_year DATE,
tech_inspection_due_date DATE,
note VARCHAR,
client_id INTEGER,
plate_number VARCHAR,
FOREIGN KEY(engine_size_measurement_type_id) REFERENCES engine_size_measurement_type(id),
FOREIGN KEY(fuel_type_id) REFERENCES fuel_type(id),
FOREIGN KEY(client_id) REFERENCES client(id));
FOREIGN KEY(vehicle_type_id) REFERENCES vehicle_type(id));
`;

const photoQuery = `
CREATE TABLE IF NOT EXISTS photo (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
photo_blob BLOB NOT NULL,
vehicle_id INTEGER NOT NULL,
FOREIGN KEY(vehicle_id) REFERENCES vehicle(id));
`;
const taskQuery = `
CREATE TABLE IF NOT EXISTS task (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
task_date DATE NOT NULL,
note VARCHAR,
vehicle_id INTEGER NOT NULL,
FOREIGN KEY(vehicle_id) REFERENCES vehicle(id));
`;

const partTaskQuery = `
CREATE TABLE IF NOT EXISTS part_task (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
task_id INTEGER NOT NULL,
used_part_id INTEGER NOT NULL,
quantity FLOAT NOT NULL,
discount FLOAT NOT NULL,
FOREIGN KEY(task_id) REFERENCES task(id),
FOREIGN KEY(used_part_id) REFERENCES part(id));
`;
const partQuery = `
CREATE TABLE IF NOT EXISTS part (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
name VARCHAR NOT NULL,
price INTEGER,
install_time DATETIME);
`;

const taskNeededPartQuery = `
CREATE TABLE IF NOT EXISTS task_needed_part (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
task_id INTEGER NOT NULL,
needed_part_id INTEGER NOT NULL,
quantity FLOAT NOT NULL,
FOREIGN KEY(task_id) REFERENCES task(id),
FOREIGN KEY(needed_part_id) REFERENCES part(id));
`;

const taskPhotoQuery = `
CREATE TABLE IF NOT EXISTS task_photo (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
photo_blob BLOB NOT NULL,
task_id INTEGER NOT NULL,
FOREIGN KEY(task_id) REFERENCES task(id));
`;
const partPhotoQuery = `
CREATE TABLE IF NOT EXISTS part_photo (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
photo_blob BLOB NOT NULL,
part_id INTEGER NOT NULL,
FOREIGN KEY(part_id) REFERENCES part(id));
`;
const partTaskPhotoQuery = `
CREATE TABLE IF NOT EXISTS part_task_photo (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
photo_blob BLOB NOT NULL,
part_task_id INTEGER NOT NULL,
FOREIGN KEY(part_task_id) REFERENCES part_task(id));
`;
const engineSizeMeasurementTypeQuery = `
CREATE TABLE IF NOT EXISTS engine_size_measurement_type (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
measurement_unit VARCHAR NOT NULL,
conversion_to_litre FLOAT NOT NULL);
`;
const fuelTypeQuery = `
CREATE TABLE IF NOT EXISTS fuel_type (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
fuel_type VARCHAR NOT NULL);
`;

const vehicleTypeQuery = `
CREATE TABLE IF NOT EXISTS vehicle_type (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
vehicle_type VARCHAR NOT NULL);
`;

const allQueries = [
  clientQuery,
  engineSizeMeasurementTypeQuery,
  fuelTypeQuery,
  partQuery,
  vehicleQuery,
  taskQuery,
  photoQuery,
  partTaskQuery,
  taskNeededPartQuery,
  taskPhotoQuery,
  partPhotoQuery,
  partTaskPhotoQuery,
  vehicleTypeQuery,
];

module.exports = { allQueries };
