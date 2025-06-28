// Ghi đè file: src-tauri/src/commands/super_browser.rs

use tauri::{Window, Manager};
use serde_json::Value;

// --- DANH SÁCH CHẶN (GIỮ NGUYÊN) ---
const BLOCKLIST: &[&str] = &[
    "googletagmanager.com",
    "google-analytics.com",
    "doubleclick.net",
    "adservice.google.com",
    "clarity.ms",
];

// --- CÁC LỆNH CỦA MODULE NÀY ---
#[tauri::command]
pub async fn execute_javascript(window: Window, script: String) -> Result<(), String> {
    let webview = get_main_webview(&window)?;
    // .eval() là đúng cho các lệnh không cần trả về kết quả
    webview.eval(&script).map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn clear_cookies(window: Window) -> Result<(), String> {
    let script = r#"
        (function() {
            var cookies = document.cookie.split("; ");
            for (var c = 0; c < cookies.length; c++) {
                var d = window.location.hostname.split(".");
                while (d.length > 0) {
                    var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                    var p = location.pathname.split('/');
                    document.cookie = cookieBase + '/';
                    while (p.length > 0) {
                        document.cookie = cookieBase + p.join('/');
                        p.pop();
                    };
                    d.shift();
                }
            }
            window.location.reload();
        })();
    "#;
    let webview = get_main_webview(&window)?;
    webview.eval(script).map_err(|e| e.to_string())
}

// --- LỆNH INSPECT ĐÃ ĐƯỢC SỬA LỖI HOÀN TOÀN ---
#[tauri::command]
pub async fn inspect_onclick_listeners(window: Window) -> Result<Vec<String>, String> {
    let script = r#"
        (function() {
            const results = [];
            const allElements = document.querySelectorAll('*');
            allElements.forEach(el => {
                if (typeof el.onclick === 'function') {
                    let selector = el.tagName.toLowerCase();
                    if (el.id) {
                        selector += '#' + el.id;
                    } else if (el.className && typeof el.className === 'string') {
                        selector += '.' + el.className.split(' ').join('.');
                    }
                    const functionSource = el.onclick.toString();
                    results.push(`Element: <${selector}>\nFunction: ${functionSource}`);
                }
            });
            return results;
        })();
    "#;
    
    let webview = get_main_webview(&window)?;
    
    // ĐÂY LÀ PHƯƠNG THỨC ĐÚNG: run_javascript
    // Nó trả về một `impl Future`, vì vậy chúng ta cần `.await`
    let result_value: Value = webview
        .run_javascript(script)
        .await
        .map_err(|e| e.to_string())?;

    // Chuyển đổi kết quả từ serde_json::Value sang Vec<String>
    let listeners = serde_json::from_value(result_value)
        .map_err(|e| format!("Failed to parse JS result: {}", e))?;

    Ok(listeners)
}


// --- CÁC HÀM HELPER (GIỮ NGUYÊN) ---
fn get_main_webview(window: &Window) -> Result<tauri::WebviewWindow, String> {
    window
        .get_webview_window("main")
        .ok_or_else(|| "Không thể tìm thấy webview chính".into())
}

// --- HÀM BUILD SCRIPT (GIỮ NGUYÊN) ---
pub fn build_adblock_script() -> String {
    let mut script_content = String::from("(() => {");
    script_content.push_str("const blocklist = [");
    for (i, entry) in BLOCKLIST.iter().enumerate() {
        script_content.push_str(&format!("'{}'", entry));
        if i < BLOCKLIST.len() - 1 {
            script_content.push_str(",");
        }
    }
    script_content.push_str("];");
    script_content.push_str(r#"
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
            const url = args[0] instanceof Request ? args[0].url : args[0];
            const blocked = blocklist.some(domain => url.includes(domain));
            if (blocked) {
                console.log(`[Super Browser] Blocked fetch to: ${url}`);
                return Promise.reject(new Error('Blocked by Super Browser'));
            }
            return originalFetch.apply(this, args);
        };
        const originalXhrOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(...args) {
            const url = args[1];
            const blocked = blocklist.some(domain => url.includes(domain));
            if (blocked) {
                console.log(`[Super Browser] Blocked XHR to: ${url}`);
                this.abort();
                return;
            }
            return originalXhrOpen.apply(this, args);
        };
        console.log("[Super Browser] Ad Blocker Initialized.");
    "#);
    script_content.push_str("})();");
    script_content
}