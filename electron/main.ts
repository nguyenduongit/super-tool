import { app, BrowserWindow, shell } from "electron";
import * as path from "path";
import { registerIpcHandlers } from "./backend"; // <-- Import hàm đăng ký

const isDev = process.env.IS_DEV === "true";

function createWindow() {
  const win = new BrowserWindow({
    width: 1680,
    height: 1055,
    fullscreenable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:1420");
    // win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "..", "app", "index.html"));
  }

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(() => {
  // Chỉ cần gọi một hàm duy nhất để đăng ký tất cả các handler
  registerIpcHandlers();

  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
