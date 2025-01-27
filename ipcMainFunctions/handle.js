
const { ipcMain } = require('electron');
const { TABLES } = require('../tablesList');
const sqlite3 = require('sqlite3');

const sqlite3Verbose = sqlite3.verbose();

ipcMain.handle('select_all', (event, tableKey) => {
  if (!tableKey || !TABLES[tableKey]) return;
  const db = new sqlite3Verbose.Database('db');
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${TABLES[tableKey]}`, (err, response) => {
    resolve(response);
  });
  db.close();
  })
});
