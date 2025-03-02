const {
  ENGINE_SIZE_MEASUREMENT_INIT_VALUES,
  FUEL_TYPE_VALUES,
  VEHICLE_TYPE_VALUES,
} = require("./dbInitData");
const { defineAllModels } = require("./dbInitModels");

let allModels = null;

const initEngineSizeMeasurementType = (model) => {
  return model.bulkCreate(
    ENGINE_SIZE_MEASUREMENT_INIT_VALUES.map(([measurementUnit, conversionToLitre]) => ({
      measurementUnit,
      conversionToLitre,
    }))
  );
};

const initFuelType = (model) => {
  return model.bulkCreate(FUEL_TYPE_VALUES.map((fuelType) => ({ fuelType })));
};

const initVehicleType = (model) => {
  return model.bulkCreate(VEHICLE_TYPE_VALUES.map((vehicleType) => ({ vehicleType })));
};

const initDefaultData = (allModels) => {
  return Promise.all([
    initEngineSizeMeasurementType(allModels.EngineSizeMeasurementType),
    initFuelType(allModels.FuelType),
    initVehicleType(allModels.VehicleType),
  ]);
};

const initDB = async (sequelize) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const models = await defineAllModels(sequelize);
    allModels = models;
    console.log("All models were defined successfully.");
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
    await initDefaultData(allModels);
    console.log("Default data was inserted successfully.");
  } catch (error) {
    console.error("Ya fucked up in the database setup somewhere", error);
  }
};

module.exports = { initDB, allModels };
