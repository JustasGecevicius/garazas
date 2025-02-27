const ENGINE_SIZE_MEASUREMENT_INIT_VALUES = Object.freeze([
  ["l", 1],
  ["cu in", 1 / 61.0237441],
  ["other", 0],
]);

const FUEL_TYPE_VALUES = Object.freeze(["diesel", "petrol", "gas"]);

const VEHICLE_TYPE_VALUES = Object.freeze(["car", "minivan", "truck", "bus", "motorcycle"]);

module.exports = {
  ENGINE_SIZE_MEASUREMENT_INIT_VALUES,
  FUEL_TYPE_VALUES,
  VEHICLE_TYPE_VALUES,
};
