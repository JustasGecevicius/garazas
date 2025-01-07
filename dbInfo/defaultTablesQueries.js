const engineSizeMeasurementInitValues = [
  ['l', 1],
  ['cu in', 1 / 61.0237441],
  ['other', 0],
];

const fuelTypeValues = ['diesel', 'petrol', 'gas'];

const vehicleTypeValues = ['car', 'minivan', 'truck', 'bus', 'motorcycle'];

const engineSizeMeasurementQuery = `INSERT INTO engine_size_measurement_type (measurement_unit,conversion_to_litre) VALUES (?,?);`;

const fuelTypeQuery = `INSERT INTO fuel_type (fuel_type) VALUES (?);`;

const vehicleTypeQuery = `INSERT INTO vehicle_type (vehicle_type) VALUES (?);`;

module.exports = {
  engineSizeMeasurementQuery,
  engineSizeMeasurementInitValues,
  fuelTypeQuery,
  fuelTypeValues,
  vehicleTypeQuery,
  vehicleTypeValues,
};
