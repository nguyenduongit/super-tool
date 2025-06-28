import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import { ModuleMeta } from "./types";

// Tự động quét các file meta.ts để lấy thông tin module
const moduleFiles = import.meta.glob<{ default: ModuleMeta }>(
  "/src/modules/*/meta.ts",
  { eager: true }
);

export const modules = Object.values(moduleFiles).map((file) => file.default);

const AppRoutes = () => {
  return (
    // Suspense dùng để hiển thị fallback UI trong khi chờ tải các module (lazy loading)
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout modules={modules} />}>
          <Route index element={<HomePage />} />
          {/* Tự động tạo route cho từng module */}
          {modules.map((module) => (
            <Route
              key={module.path}
              path={module.path}
              element={<module.component />}
            />
          ))}
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
