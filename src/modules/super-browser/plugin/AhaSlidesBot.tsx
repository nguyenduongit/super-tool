import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

import "./AhaSlidesBot.css";

const AhaSlidesBot: React.FC = () => {
  const [rawPayload, setRawPayload] = useState("");

  const [presentationId, setPresentationId] = useState("");
  const [slideId, setSlideId] = useState("");
  const [voteOptionId, setVoteOptionId] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [voteType, setVoteType] = useState("imageChoice");

  const [voteCount, setVoteCount] = useState("100");
  const [isLoading, setIsLoading] = useState(false);
  const [log, setLog] = useState("Sẵn sàng để bình chọn...");
  const [warning, setWarning] = useState("");

  // Bóc JSON tự động
  useEffect(() => {
    setWarning("");

    const rawText = rawPayload.trim();
    if (!rawText) {
      setPresentationId("");
      setSlideId("");
      setVoteOptionId("");
      setAccessCode("");
      setVoteType("imageChoice");
      return;
    }

    try {
      const parsed = JSON.parse(rawText);

      setPresentationId(parsed.presentation?.toString() || "");
      setSlideId(parsed.slide?.toString() || "");
      setVoteOptionId(
        parsed.vote && Array.isArray(parsed.vote) && parsed.vote.length > 0
          ? parsed.vote[0].toString()
          : ""
      );
      setAccessCode(parsed.accessCode?.toString() || "");
      setVoteType(parsed.type?.toString() || "imageChoice");
    } catch {
      setWarning("Lỗi: Dữ liệu bạn dán không phải là một chuỗi JSON hợp lệ.");
      setPresentationId("");
      setSlideId("");
      setVoteOptionId("");
      setAccessCode("");
      setVoteType("imageChoice");
    }
  }, [rawPayload]);

  // Bắt đầu gửi bình chọn
  const handleStartVoting = async () => {
    if (!presentationId || !slideId || !voteOptionId) {
      alert("Lỗi: Dữ liệu không đủ thông tin. Vui lòng dán payload hợp lệ.");
      return;
    }

    setIsLoading(true);
    setLog(`Bắt đầu gửi ${voteCount} lượt bình chọn...\n`);

    try {
      const result = await invoke<string>("send_bulk_votes", {
        presentationId: Number(presentationId),
        slideId: Number(slideId),
        voteOptionId: Number(voteOptionId),
        count: Number(voteCount),
        accessCode: accessCode || null,
        voteType: voteType || null,
      });

      setLog(result);
    } catch (error) {
      setLog(`Đã xảy ra lỗi: ${error}`);
    }

    setIsLoading(false);
  };

  return (
    <div className="voting-bot-container attack-panel">
      <h1>AhaSlides Bot</h1>
      <p>
        <b>Hướng dẫn:</b> Dán <b>Request Payload</b> hoặc <b>Response</b> vào ô
        "Dữ liệu mẫu". Các thông tin sẽ được tự động điền.
      </p>

      <div className="form-group">
        <label>Dữ liệu mẫu (JSON)</label>
        <textarea
          value={rawPayload}
          onChange={(e) => setRawPayload(e.target.value)}
          rows={12}
          disabled={isLoading}
          placeholder="Dán nội dung JSON chứa thông tin vote..."
        />
        {warning && <p className="warning-text">{warning}</p>}
      </div>

      <div className="form-group-grid">
        <div className="form-group">
          <label>Presentation ID</label>
          <input
            type="text"
            value={presentationId}
            readOnly
            placeholder="Tự động điền..."
          />
        </div>
        <div className="form-group">
          <label>Slide ID</label>
          <input
            type="text"
            value={slideId}
            readOnly
            placeholder="Tự động điền..."
          />
        </div>
        <div className="form-group">
          <label>Vote ID</label>
          <input
            type="text"
            value={voteOptionId}
            onChange={(e) => setVoteOptionId(e.target.value)}
            disabled={isLoading}
            placeholder="Tự động điền..."
          />
        </div>
        <div className="form-group">
          <label>Access Code</label>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            disabled={isLoading}
            placeholder="Tự động điền nếu có..."
          />
        </div>
        <div className="form-group">
          <label>Vote Type</label>
          <input
            type="text"
            value={voteType}
            onChange={(e) => setVoteType(e.target.value)}
            disabled={isLoading}
            placeholder="imageChoice..."
          />
        </div>
      </div>

      <div className="form-group">
        <label>Số lượt bình chọn</label>
        <input
          type="number"
          value={voteCount}
          onChange={(e) => setVoteCount(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <button
        className="run-button"
        onClick={handleStartVoting}
        disabled={isLoading}
      >
        {isLoading ? "Đang gửi..." : "Run"}
      </button>

      <div className="log-area">
        <h3>Dòng tiến trình:</h3>
        <pre>{log}</pre>
      </div>
    </div>
  );
};

export default AhaSlidesBot;
