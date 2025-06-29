// src/electronApi.ts

import type { SendBulkVotesArgs } from "../electron/preload";

// Để TypeScript không báo lỗi, bạn cần định nghĩa `electronAPI` trên `window`
declare global {
  interface Window {
    electronAPI: {
      sendBulkVotes: (args: SendBulkVotesArgs) => Promise<string>;
    };
  }
}

export const electronAPI = window.electronAPI;
