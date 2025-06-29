import { ipcMain } from "electron";
import { handleSendBulkVotes } from "./super-browser/ahaSlidesBotHandler";

export function registerIpcHandlers() {
  // Đăng ký handler cho module Super Browser
  ipcMain.handle("send-bulk-votes", handleSendBulkVotes);

  // SAU NÀY KHI CÓ MODULE MỚI, BẠN CHỈ CẦN THÊM VÀO ĐÂY
  // Ví dụ:
  // import { handleSomeOtherTask } from './new-module/someHandler';
  // ipcMain.handle('some-other-task', handleSomeOtherTask);
}
