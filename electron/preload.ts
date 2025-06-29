import { contextBridge, ipcRenderer } from "electron";

// Định nghĩa kiểu dữ liệu cho các tham số của hàm
export interface SendBulkVotesArgs {
  presentationId: number;
  slideId: number;
  voteOptionId: number;
  count: number;
  accessCode?: string;
  voteType?: string;
}

// API được phơi bày ra renderer process
export const api = {
  sendBulkVotes: (args: SendBulkVotesArgs): Promise<string> => {
    return ipcRenderer.invoke("send-bulk-votes", args);
  },
};

// Phơi bày api ra đối tượng `window` trong renderer một cách an toàn
contextBridge.exposeInMainWorld("electronAPI", api);
