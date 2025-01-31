
const { ipcMain } = require('electron');
const { TABLES } = require('../tablesList');
const sqlite3 = require('sqlite3');
const { CHANNELS } = require('../preload');

const sqlite3Verbose = sqlite3.verbose();

ipcMain.handle(CHANNELS.SELECT_ALL, (_, tableKey) => {
  if (!tableKey || !TABLES[tableKey]) return;
  const db = new sqlite3Verbose.Database('db');
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${TABLES[tableKey]}`, (err, response) => {
    resolve(response);
  });
  db.close();
  })
});

ipcMain.handle(CHANNELS.SELECT_ALL_WITH_PARAMS, (_, tableKey, params) => {
  if (!tableKey || !TABLES[tableKey] | !params) return;

  const paginationQuery = params.limit && params.page
    ? ` LIMIT ${params.limit} OFFSET ${(params.page - 1) * params?.limit}`
    : '';

  const db = new sqlite3Verbose.Database('db');
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${TABLES[tableKey]}${paginationQuery}`, (err, response) => {
    resolve(response);
  });
  db.close();
  })
});