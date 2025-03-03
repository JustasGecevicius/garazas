const { ipcMain } = require("electron");
const { TABLES } = require("../../tablesList");
const sqlite3 = require("sqlite3");
const { CHANNELS } = require("../../channels");
const { sequelize } = require("../../dbInfo/dbInitFunctions");

require("../vehicle/handle");

ipcMain.handle(CHANNELS.SELECT, (_, tableKey, id) => {
  const numberId = Number(id);
  const table = TABLES[tableKey];
  if (!tableKey || !table || !numberId) return;
  const db = new sqlite3Verbose.Database("db");
  let promise = null;
  switch (table) {
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

ipcMain.handle(CHANNELS.SELECT_ALL, async (_, modelName) => {
  const model = sequelize?.models?.[modelName];
  if (!model) return;
  const data = await model.findAll();
  return data.map((entry) => entry.dataValues);
});

ipcMain.handle(CHANNELS.SELECT_ALL_WITH_PARAMS, async (_, modelName, params) => {
  if (!modelName || !params) return;
  const model = sequelize?.models?.[modelName];

  if (!model) return;

  const { limit, page } = params;

  const data = await model.findAndCountAll({
    limit: typeof limit === "number" ? limit : 15,
    offset: typeof page === "number" ? (page - 1) * limit : 0,
  });

  return {
    data: data.rows.map((entry) => entry.dataValues),
    total: data?.count,
  };
});
