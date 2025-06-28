// File: src-tauri/src/main.rs
// PHIÊN BẢN ĐƠN GIẢN NHẤT

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Không cần khai báo module commands nữa
// mod commands;

fn main() {
    tauri::Builder::default()
        // Không còn .invoke_handler
        .run(tauri::generate_context!())
        .expect("Lỗi xảy ra khi đang chạy ứng dụng Tauri");
}