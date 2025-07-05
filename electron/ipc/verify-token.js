function verifyToken() {
  ipcMain.handle("verify-token", async (event, token) => {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (!decoded || !decoded.id) {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  });
}

module.exports = verifyToken;
