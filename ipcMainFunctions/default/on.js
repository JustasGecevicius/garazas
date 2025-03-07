const { ipcMain } = require("electron");
const { TABLES, MODELS } = require("../../tablesList");
const sqlite3 = require("sqlite3");
const { sequelize } = require("../../dbInfo/dbInitFunctions");

const sqlite3Verbose = sqlite3.verbose();

const getValue = (value) => {
  if (value === null || value === undefined) {
    return "";
  } else {
    return value;
  }
};

ipcMain.on("delete", (_, modelName, id) => {
  const numberId = Number(id);
  if (!numberId || !modelName) return;

  const sequelizeModel = sequelize?.models?.[modelName];
  if (!sequelizeModel) return;
  sequelizeModel.destroy({ where: { id: numberId } });
});

ipcMain.on("select_full", (_, tableKey, id, callback) => {
  if (!id || !tableKey) return;
  const table = TABLES[tableKey];
  if (!table) return;
  const db = new sqlite3Verbose.Database("db");
  db.get(`SELECT *FROM ${table} WHERE id = ${id}`, (err, res) => {
    console.log(res);
  });
  db.close();
  callback();
});

ipcMain.on("create", (_, modelName, data) => {
  if (typeof data !== "object" || !data) return;
  const sequelizeModel = sequelize?.models?.[modelName];
  if (!sequelizeModel) return;
  sequelizeModel.create(data);
});

ipcMain.on("update", (_, tableKey, data) => {
  if (typeof data !== "object" || !data) return;
  const table = TABLES[tableKey];
  if (!table) return;

  const db = new sqlite3Verbose.Database("db");
  console.log(
    `UPDATE ${table} SET ${Object.entries(data).reduce((prev, curr) => {
      if (curr[0] === "id") {
        return prev;
      }
      prev += (prev ? "," : "") + `${curr[0]}=${getValue(curr[1]) || `\'\'`}`;
      return prev;
    }, "")}
      WHERE id=\'${data.id}\'`
  );
  db.run(
    `UPDATE ${table} SET ${Object.entries(data).reduce((prev, curr) => {
      if (curr[0] === "id") {
        return prev;
      }
      prev += (prev ? "," : "") + `${curr[0]}=\'${getValue(curr[1])}\'`;
      return prev;
    }, "")}
      WHERE id=\'${data.id}\'`
  );
  db.close();
});
