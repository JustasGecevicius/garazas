const { app, BrowserWindow } = require("electron");
require("./ipcMainFunctions/default/on");
require("./ipcMainFunctions/default/handle");
const { join } = require("path");
const { initDB } = require("./dbInfo/dbInitFunctions");
const url = require("url");

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 1100,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`,
    },
  });

  const startUrl =
    "http://localhost:3000" ||
    url.format({
      pathname: join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true,
    });
  win.loadURL(startUrl);
  win.webContents.openDevTools();
}

app.whenReady().then(async () => {
  try {
    const dbInitialised = await initDB();
    dbInitialised && createWindow();
  } catch (error) {
    throw new Error("Error in app ready", error);
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
