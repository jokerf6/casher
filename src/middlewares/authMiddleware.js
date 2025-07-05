import { ipcRenderer } from "electron";

export async function checkAuth() {
  const token = sessionStorage.getItem("token");
  if (!token) return false;

  const isValid = await ipcRenderer.invoke("verify-token", token);
  return isValid;
}
