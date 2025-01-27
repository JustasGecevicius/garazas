const { ipcMain } = require('electron');
const { TABLES } = require('../tablesList');
const sqlite3 = require('sqlite3');

const sqlite3Verbose = sqlite3.verbose();

ipcMain.on('delete', (_, tableKey, id) => {
  if (!id) return;
  const table = TABLES[tableKey];
  if (!table) return;

  const db = new sqlite3Verbose.Database('db');
  db.run(`DELETE FROM ${table} WHERE id = ?`);
  db.close();
});

ipcMain.on('select_full', (_, tableKey, id, callback) => {
  if (!id || !tableKey) return;
  const table = TABLES[tableKey];
  if (!table) return;
  const db = new sqlite3Verbose.Database('db');
  db.get(`SELECT *FROM ${table} WHERE id = ${id}`, (err, res) => {
    console.log(res);
  });
  db.close();
  callback();
});

ipcMain.on('select_full', (_, tableKey, id, callback) => {
  if (!id || !tableKey) return;
  const table = TABLES[tableKey];
  if (!table) return;
  const db = new sqlite3Verbose.Database('db');
  db.get(`SELECT * FROM ${table} WHERE id = ${id}`, (err, res) => {
    console.log(res);
  });
  db.close();
  callback();
});


ipcMain.on('create', (_, tableKey, data) => {
  if (typeof data !== 'object' || !data) return;
  const table = TABLES[tableKey];
  if (!table) return;

  const db = new sqlite3Verbose.Database('db');
  db.serialize(() => {
    db.run(
      `INSERT into
      ${table} (${Object.keys(data)?.join(', ')})
      VALUES (${Object.values(data)?.reduce((prev, curr) => {
        if (prev === '') {
          prev += `\'${curr}\'`;
        } else {
          prev += `,\'${curr}\'`;
        }
        console.log(prev);
        return prev;
      }, '')})`
    );
  });
  db.close();
});

ipcMain.on('update', (_, tableKey, data) => {
  if (typeof data !== 'object' || !data) return;
  const table = TABLES[tableKey];
  if (!table) return;

  // const db = new sqlite3Verbose.Database('db');
  // db.serialize(() => {
  //   // db.run(
  //   //   `UPDATE into
  //   //   ${table} (${Object.keys(data)?.join(', ')})
  //   //   VALUES (${Object.values(data)?.reduce((prev, curr) => {
  //   //     if (prev === '') {
  //   //       prev += `\'${curr}\'`;
  //   //     } else {
  //   //       prev += `,\'${curr}\'`;
  //   //     }
  //   //     console.log(prev);
  //   //     return prev;
  //   //   }, '')})`
  //   // );
  // });
  // db.close();
});
