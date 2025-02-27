const { app, BrowserWindow } = require("electron");
const { Sequelize } = require("sequelize");
require("./ipcMainFunctions/default/on");
require("./ipcMainFunctions/default/handle");
const { initDB } = require("./dbInfo/dbInitFunctions");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db",
});

initDB(sequelize);

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 1100,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`,
    },
  });

  win.loadURL("http://localhost:3000");
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});

module.exports = { sequelize };
