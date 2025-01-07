const { app, BrowserWindow, ipcMain } = require('electron');
const sqlite3 = require('sqlite3');
const { TABLES } = require('./tablesList');
const { allQueries } = require('./dbInfo/dbInitQueries');
const {
  engineSizeMeasurementQuery,
  engineSizeMeasurementInitValues,
  fuelTypeValues,
  fuelTypeQuery,
  vehicleTypeValues,
  vehicleTypeQuery,
} = require('./dbInfo/defaultTablesQueries');
const { insertValuesIfNoneFound } = require('./dbInfo/dbInitHelperFunctions');

const sqlite3Verbose = sqlite3.verbose();

function createWindow() {
  const queriesList = [];
  const db = new sqlite3Verbose.Database('db');
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`,
    },
  });
  db.serialize(() => {
    allQueries.forEach((query) => db.run(query));
  });
  insertValuesIfNoneFound(
    db,
    'engine_size_measurement_type',
    engineSizeMeasurementInitValues,
    engineSizeMeasurementQuery
  );
  insertValuesIfNoneFound(db, 'fuel_type', fuelTypeValues, fuelTypeQuery);
  insertValuesIfNoneFound(
    db,
    'vehicle_type',
    vehicleTypeValues,
    vehicleTypeQuery
  );

  db.close();
  win.loadURL('http://localhost:3000');
  win.webContents.openDevTools({
    mode: 'detach',
  });
}

app.whenReady().then(createWindow);

ipcMain.on('delete', (event, tableKey, id) => {
  const table = TABLES[tableKey];
  if (!table || !id) return;

  const db = new sqlite3Verbose.Database('db');
  const deleteStmt = db.prepare(`DELETE FROM ${table} WHERE id = ?`);
  deleteStmt.run(id);
  deleteStmt.finalize();
  db.each('SELECT * from vehicle', (err, row) => {
    console.log(row);
  });
  db.close();
});

ipcMain.on('create', (event, tableKey, id) => {
  const table = TABLES[tableKey];
  if (!table || !id) return;

  const db = new sqlite3Verbose.Database('db');
  const deleteStmt = db.prepare(`DELETE FROM ${table} WHERE id = ?`);
  deleteStmt.run(id);
  deleteStmt.finalize();
  db.each('SELECT * from vehicle', (err, row) => {
    console.log(row);
  });
  db.close();
});
