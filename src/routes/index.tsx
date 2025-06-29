import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
// Import 'modules' từ tệp mới thay vì định nghĩa tại đây
import { modules } from "./moduleLoader";

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", paddingTop: "5rem" }}>
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage modules={modules} />} />

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

// Bây giờ tệp này chỉ export một component duy nhất
export default AppRoutes;
