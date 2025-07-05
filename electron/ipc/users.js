const { ipcMain } = require("electron");
const db = require("../db");

function registerUserIPC() {
  ipcMain.handle("get-users", async () => {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  });

  ipcMain.on("add-user", async (event, user) => {
    try {
      const [result] = await db.query("INSERT INTO users (name, email) VALUES (?, ?)", [
        user.name,
        user.email
      ]);
      event.reply("add-user-success", result.insertId);
    } catch (err) {
      event.reply("add-user-error", err.message);
    }
  });
}

module.exports = registerUserIPC;
