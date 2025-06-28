// Ghi đè file: src-tauri/src/main.rs

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Khai báo với Rust về sự tồn tại của thư mục/module `commands`
mod commands;

// Thêm Manager để có thể dùng .get_webview_window() trên window
use tauri::Manager;

fn main() {
    // Lấy mã script chặn quảng cáo từ module super_browser
    let adblock_script = commands::super_browser::build_adblock_script();

    tauri::Builder::default()
        // Đăng ký các lệnh bằng cách chỉ đến chúng qua các module
        .invoke_handler(tauri::generate_handler![
            commands::super_browser::execute_javascript,
            commands::super_browser::clear_cookies,
            // THÊM LỆNH MỚI VÀO ĐÂY
            commands::super_browser::inspect_onclick_listeners
        ])
        .on_page_load(move |window, _payload| {
            // Bây giờ window có thể gọi get_webview_window
            if let Some(webview) = window.get_webview_window("main") {
                webview.eval(&adblock_script).unwrap();
            }
        })
        .run(tauri::generate_context!())
        .expect("Lỗi xảy ra khi đang chạy ứng dụng Tauri");
}