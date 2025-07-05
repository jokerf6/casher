import jwt from "jsonwebtoken";

function loginIPC() {
  ipcMain.handle("login-user", async (event, credentials) => {
    const { username, password } = credentials;

    const [rows] = await db.query("SELECT * FROM users WHERE username = ? AND password = ?", [
      username,
      password
    ]);

    if (rows.length > 0) {
      const user = rows[0];
      const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY, {
        expiresIn: "24h"
      });

      return { success: true, token };
    } else {
      return { success: false };
    }
  });
}

module.exports = loginIPC;
