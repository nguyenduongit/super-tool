import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "./",
  build: {
    // Đảm bảo thư mục đầu ra là 'dist', nơi Electron sẽ tìm kiếm
    outDir: "dist/app",
  },
  server: {
    port: 1420,
    strictPort: true,
  },
});
