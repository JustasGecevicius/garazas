const { app, BrowserWindow } = require("electron");
const sqlite3 = require("sqlite3");
const { Sequelize } = require("sequelize");
require("./ipcMainFunctions/default/on");
require("./ipcMainFunctions/default/handle");
const { defineAllModels } = require("./dbInfo/dbInitQueries");
const {
  engineSizeMeasurementQuery,
  engineSizeMeasurementInitValues,
  fuelTypeValues,
  fuelTypeQuery,
  vehicleTypeValues,
  vehicleTypeQuery,
} = require("./dbInfo/defaultTablesQueries");
const { insertValuesIfNoneFound } = require("./dbInfo/dbInitHelperFunctions");

const sqlite3Verbose = sqlite3.verbose();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    defineAllModels(sequelize);
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

sequelize
  .sync()
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("Unable to synchronize the models with the database:", error);
  });

function createWindow() {
  const db = new sqlite3Verbose.Database("db");
  const win = new BrowserWindow({
    width: 1500,
    height: 1100,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`,
    },
  });
  // insertValuesIfNoneFound(
  //   db,
  //   "engine_size_measurement_type",
  //   engineSizeMeasurementInitValues,
  //   engineSizeMeasurementQuery
  // );
  // insertValuesIfNoneFound(db, "fuel_type", fuelTypeValues, fuelTypeQuery);
  // insertValuesIfNoneFound(db, "vehicle_type", vehicleTypeValues, vehicleTypeQuery);

  db.close();
  win.loadURL("http://localhost:3000");
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});
