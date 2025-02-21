const { ipcMain } = require("electron");
const { TABLES } = require("../tablesList");
const sqlite3 = require("sqlite3");
const { CHANNELS } = require("../channels");

ipcMain.handle(CHANNELS.SELECT, (_, tableKey, id) => {
  const numberId = Number(id);
  console.log("SELECT", tableKey, numberId);
  const table = TABLES[tableKey];
  if (!tableKey || !table || !numberId) return;
  const db = new sqlite3Verbose.Database("db");
  let promise = null;
  switch (table) {
    case TABLES.vehicle:
      promise = new Promise((resolve, reject) => {
        db.get(
          `SELECT ${table}.id AS id, ${table}.name AS name, ${table}.model AS model, ${table}.engine_size AS engine_size, ${table}.engine_size_measurement_type_id AS engine_size_measurement_type_id, ${table}.vin_code AS vin_code, ${table}.make AS make, ${table}.fuel_type_id AS fuel_type_id, ${table}.odometer AS odometer, ${table}.fabrication_year AS fabrication_year, ${table}.tech_inspection_due_date AS tech_inspection_due_date, ${table}.note AS note, ${table}.client_id AS client_id, ${table}.plate_number AS plate_number, ${table}.vehicle_type_id AS vehicle_type_id, COALESCE(json_group_array(json_object('id', task.id, 'date', task.task_date, 'note', task.note)), '[]') AS tasks FROM ${table} INNER JOIN task ON task.vehicle_id = ${table}.id WHERE ${table}.id = ${id}`,
          (err, response) => {
            resolve(response);
          }
        );
      });
      break;
    default:
      promise = new Promise((resolve, reject) => {
        db.get(`SELECT * FROM ${table} WHERE id='${numberId}'`, (err, response) => {
          resolve(response);
        });
      });
  }
  db.close();
  return promise;
});

const sqlite3Verbose = sqlite3.verbose();

ipcMain.handle(CHANNELS.SELECT_ALL, (_, tableKey) => {
  if (!tableKey || !TABLES[tableKey]) return;
  const db = new sqlite3Verbose.Database("db");
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${TABLES[tableKey]}`, (err, response) => {
      resolve(response);
    });
    db.close();
  });
});

ipcMain.handle(CHANNELS.SELECT_ALL_WITH_PARAMS, (_, tableKey, params) => {
  if (!tableKey || !TABLES[tableKey] | !params) return;

  const paginationQuery =
    params.limit && params.page
      ? ` LIMIT ${params.limit} OFFSET ${(params.page - 1) * params?.limit}`
      : "";

  const db = new sqlite3Verbose.Database("db");

  const countPromise = new Promise((resolve, reject) =>
    db.all(`SELECT COUNT(*) FROM ${TABLES[tableKey]}`, (err, response) => {
      resolve(response);
    })
  );

  const dataPromise = new Promise(async (resolve, reject) => {
    db.all(`SELECT * FROM ${TABLES[tableKey]}${paginationQuery}`, (err, response) => {
      resolve(response);
    });
  });
  db.close();
  return Promise.all([countPromise, dataPromise]).then(([count, data]) => ({
    total: count[0]["COUNT(*)"],
    data,
  }));
});
