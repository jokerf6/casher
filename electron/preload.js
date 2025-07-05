const { contextBridge, ipcRenderer } = require("electron");
console.log("✅ preload.js loaded");

contextBridge.exposeInMainWorld("electronAPI", {
  // product
  addProduct: product => ipcRenderer.send("add-product", product),
  onProductAdded: cb => ipcRenderer.on("add-product-success", (_, id) => cb(id)),
  onAddError: cb => ipcRenderer.on("add-product-error", (_, err) => cb(err)),
  getProducts: () => ipcRenderer.invoke("get-products"),

  // login
  loginUser: credentials => ipcRenderer.invoke("login-user", credentials),
  onLoginSuccess: cb => ipcRenderer.on("login-success", (_, user) => cb(user)),
  onLoginError: cb => ipcRenderer.on("login-error", (_, error) => cb(error)),

  // verifyToken
  verifyToken: token => ipcRenderer.invoke("verify-token", token),
  onTokenVerified: cb => ipcRenderer.on("token-verified", (_, isValid) => cb(isValid)),
  onTokenError: cb => ipcRenderer.on("token-error", (_, error) => cb(error))
});
