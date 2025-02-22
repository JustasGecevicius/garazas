const { ipcMain } = require("electron");
const { TABLES } = require("../../tablesList");
const sqlite3 = require("sqlite3");

const sqlite3Verbose = sqlite3.verbose();

const getValue = (value) => {
  if (value === null || value === undefined) {
    return "";
  } else {
    return value;
  }
};

ipcMain.on("delete", (_, tableKey, id) => {
  const numberId = Number(id);
  const table = TABLES[tableKey];
  if (!numberId || !table) return;

  const db = new sqlite3Verbose.Database("db");
  db.run(`DELETE FROM ${table} WHERE id = '${numberId}'`);
  db.close();
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

ipcMain.on("select_full", (_, tableKey, id, callback) => {
  if (!id || !tableKey) return;
  const table = TABLES[tableKey];
  if (!table) return;
  const db = new sqlite3Verbose.Database("db");
  db.get(`SELECT * FROM ${table} WHERE id = ${id}`, (err, res) => {
    console.log(res);
  });
  db.close();
  callback();
});

ipcMain.on("create", (_, tableKey, data) => {
  console.log("DATAS", data, tableKey);
  if (typeof data !== "object" || !data) return;
  const table = TABLES[tableKey];
  if (!table) return;

  const db = new sqlite3Verbose.Database("db");
  console.log("TABLE", table);
  const query = `INSERT into ${table} (${Object.keys(data)?.join(", ")}) VALUES (${
    Object.values(data)?.reduce((prev, curr) => {
      if (prev === "") {
        prev += `\'${getValue(curr)}\'`;
      } else {
        prev += `,\'${getValue(curr)}\'`;
      }
      return prev;
    }, "") || "'name'"
  })`;
  console.log("QUERY", query);
  db.run(query);
  db.close();
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
