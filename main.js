const { app, BrowserWindow } = require("electron");
require("./ipcMainFunctions/default/on");
require("./ipcMainFunctions/default/handle");
const { initDB } = require("./dbInfo/dbInitFunctions");

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

initDB();

app.whenReady().then(() => {
  createWindow();
});
