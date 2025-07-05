const { ipcMain } = require("electron");
const db = require("../db");

function registerProductIPC() {
  ipcMain.on("add-product", async (event, product) => {
    try {
      const [result] = await db.query(
        "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)",
        [product.name, product.price, product.stock]
      );
      event.reply("add-product-success", result.insertId);
    } catch (err) {
      console.error("MySQL Insert Error:", err);
      event.reply("add-product-error", err.message);
    }
  });

  ipcMain.handle("get-products", async () => {
    const [rows] = await db.query("SELECT * FROM products ORDER BY id DESC");
    return rows;
  });
}

module.exports = registerProductIPC;
