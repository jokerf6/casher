const { BrowserWindow } = require("electron");
const path = require("path");
const isDev = !require("electron").app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false
    }
  });

  win.loadURL(
    isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

module.exports = createWindow;
