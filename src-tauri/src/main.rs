#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rand::Rng;
use serde_json::json;
use tauri::command;

// Tạo audience ID ngẫu nhiên
fn generate_random_audience_id() -> String {
    let mut rng = rand::thread_rng();
    (0..32)
        .map(|_| {
            let idx = rng.gen_range(0..16);
            std::char::from_digit(idx, 16).unwrap()
        })
        .collect()
}

#[command]
async fn send_bulk_votes(
    presentation_id: u64,
    slide_id: u64,
    vote_option_id: u64,
    count: u32,
    access_code: Option<String>,
    vote_type: Option<String>,
) -> Result<String, String> {
    let api_url = "https://audience.ahaslides.com/api/answer/create";
    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(10))
        .build()
        .unwrap();

    let mut successful_votes = 0;
    let mut errors = Vec::new();

    for i in 0..count {
        let new_audience_id = generate_random_audience_id();
        let new_timestamp = std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .unwrap()
            .as_millis()
            .to_string();

        // Payload chuẩn
        let mut payload = json!({
            "presentation": presentation_id,
            "slide": slide_id,
            "audience": new_audience_id,
            "slideTimestamp": new_timestamp,
            "vote": [vote_option_id],
            "config": {
                "timeToAnswer": 60,
                "quizTimestamp": [],
                "multipleChoice": false,
                "isCorrectGetPoint": true,
                "stopSubmission": false,
                "fastAnswerGetMorePoint": false,
                "otherCorrectQuiz": [],
                "showVotingResultsOnAudience": true,
                "version": 2
            }
        });

        // Nếu có accessCode
        if let Some(ref code) = access_code {
            payload["accessCode"] = json!(code);
        }

        // Nếu có type từ frontend, dùng type đó
        // Nếu không có, default "imageChoice"
        payload["type"] = json!(vote_type.clone().unwrap_or_else(|| "imageChoice".to_string()));

        // Gửi request
        let response = client.post(api_url).json(&payload).send().await;

        match response {
            Ok(res) => {
                if res.status().is_success() {
                    successful_votes += 1;
                } else {
                    let status = res.status();
                    let body = res.text().await.unwrap_or_default();
                    errors.push(format!("Lỗi {}: {}", status, body));
                }
            }
            Err(e) => {
                errors.push(format!("Kết nối lỗi: {}", e));
            }
        }

        // Delay nhỏ để tránh spam
        tokio::time::sleep(std::time::Duration::from_millis(200)).await;
    }

    let mut msg = format!(
        "Hoàn thành! Thành công {}/{}.",
        successful_votes, count
    );

    if !errors.is_empty() {
        msg.push_str(&format!("\n\nChi tiết lỗi:\n{}", errors.join("\n")));
    }

    Ok(msg)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![send_bulk_votes])
        .run(tauri::generate_context!())
        .expect("Lỗi xảy ra khi chạy ứng dụng Tauri");
}
