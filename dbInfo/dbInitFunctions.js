const { Sequelize } = require("sequelize");
const {
  ENGINE_SIZE_MEASUREMENT_INIT_VALUES,
  FUEL_TYPE_VALUES,
  VEHICLE_TYPE_VALUES,
} = require("./dbInitData");
const { defineAllModels } = require("./dbInitModels");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db",
});

let allModels = { current: null };

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

const initDefaultData = async (allModels) => {
  const count = await allModels.current.EngineSizeMeasurementType.count();
  if (count > 0) return null;
  return Promise.all([
    initEngineSizeMeasurementType(allModels.current.EngineSizeMeasurementType),
    initFuelType(allModels.current.FuelType),
    initVehicleType(allModels.current.VehicleType),
  ]);
};

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const models = await defineAllModels(sequelize);
    allModels.current = models;
    console.log("All models were defined successfully.");
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
    await initDefaultData(allModels);
    console.log("Default data was inserted successfully.");
  } catch (error) {
    console.error("Ya fucked up in the database setup somewhete", error);
  }
};

module.exports = { initDB, allModels, sequelize };
