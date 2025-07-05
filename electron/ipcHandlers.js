const loginIPC = require("./ipc/login");
const registerProductIPC = require("./ipc/products");
const registerUserIPC = require("./ipc/users");

function setupIPC() {
  registerProductIPC();
  registerUserIPC();
  loginIPC();
}

module.exports = setupIPC;
