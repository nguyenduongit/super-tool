import { lazy } from "react";
import { LuGlobe } from "react-icons/lu"; // Chọn icon quả địa cầu cho "Browser"
import { ModuleMeta } from "@/routes/types";

// Dùng lazy loading để chỉ tải code của module này khi người dùng nhấn vào
const SuperBrowser = lazy(() => import("."));

const meta: ModuleMeta = {
  path: "/super-browser", // Đường dẫn URL, ví dụ: http://localhost:5173/super-browser
  name: "Super Browser", // Tên hiển thị trên sidebar
  icon: LuGlobe, // Icon hiển thị
  component: SuperBrowser, // Component chính của module
};

export default meta;
