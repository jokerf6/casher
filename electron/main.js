const { app } = require("electron");
const createWindow = require("./window");
const setupIPC = require("./ipcHandlers");

app.whenReady().then(() => {
  createWindow();
  setupIPC();
});
