import { create } from "zustand";
import React from "react";

// Định nghĩa kiểu dữ liệu cho state của header
interface HeaderState {
  // `controls` có thể là bất kỳ component React nào
  controls: React.ReactNode | null;
  // Hàm để các module có thể thiết lập component điều khiển của mình
  setControls: (controls: React.ReactNode) => void;
  // Hàm để xóa các component điều khiển khi rời khỏi module
  clearControls: () => void;
}

// Tạo store
export const useHeaderStore = create<HeaderState>((set) => ({
  controls: null,
  setControls: (controls) => set({ controls }),
  clearControls: () => set({ controls: null }),
}));
