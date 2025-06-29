import { ModuleMeta } from "./types";

// Tự động quét các file meta.ts để lấy thông tin module
const moduleFiles = import.meta.glob<{ default: ModuleMeta }>(
  "/src/modules/*/meta.ts",
  { eager: true }
);

// Export hằng số modules từ đây
export const modules = Object.values(moduleFiles).map((file) => file.default);
