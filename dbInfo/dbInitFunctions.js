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

const initEngineSizeMeasurementType = (model) => {
  return model.bulkCreate(
    ENGINE_SIZE_MEASUREMENT_INIT_VALUES.map(([unit, conversionToLitre]) => ({
      engineSizeMeasurementType: unit,
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
  const count = await allModels.EngineSizeMeasurementTypes.count();
  if (count > 0) return null;
  return Promise.all([
    initEngineSizeMeasurementType(allModels.EngineSizeMeasurementTypes),
    initFuelType(allModels.FuelTypes),
    initVehicleType(allModels.VehicleTypes),
  ]);
};

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const models = await defineAllModels(sequelize);
    console.log("All models were defined successfully.");
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
    await initDefaultData(models);
    console.log("Default data was inserted successfully.");
  } catch (error) {
    console.error("Ya fucked up in the database setup somewhere", error);
  }
};

module.exports = { initDB, sequelize };
