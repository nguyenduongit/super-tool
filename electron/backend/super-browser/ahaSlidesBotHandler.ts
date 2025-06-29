import { IpcMainInvokeEvent } from "electron";
import axios, { isAxiosError } from "axios";
import { VotePayload } from "./types"; // Chúng ta sẽ tạo tệp types này ngay sau đây

// Hàm này chỉ thuộc về module này
function generateRandomAudienceId(): string {
  const chars = "0123456789abcdef";
  let result = "";
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Logic chính của handler, được export ra ngoài
export async function handleSendBulkVotes(
  _event: IpcMainInvokeEvent,
  {
    presentationId,
    slideId,
    voteOptionId,
    count,
    accessCode,
    voteType,
  }: {
    presentationId: number;
    slideId: number;
    voteOptionId: number;
    count: number;
    accessCode?: string;
    voteType?: string;
  }
): Promise<string> {
  const apiUrl = "https://audience.ahaslides.com/api/answer/create";
  const client = axios.create({ timeout: 10000 });
  let successfulVotes = 0;
  const errors: string[] = [];

  for (let i = 0; i < count; i++) {
    const newAudienceId = generateRandomAudienceId();
    const newTimestamp = Date.now().toString();

    const payload: VotePayload = {
      presentation: presentationId,
      slide: slideId,
      audience: newAudienceId,
      slideTimestamp: newTimestamp,
      vote: [voteOptionId],
      config: {
        timeToAnswer: 60,
        quizTimestamp: [],
        multipleChoice: false,
        isCorrectGetPoint: true,
        stopSubmission: false,
        fastAnswerGetMorePoint: false,
        otherCorrectQuiz: [],
        showVotingResultsOnAudience: true,
        version: 2,
      },
      type: voteType || "imageChoice",
    };

    if (accessCode) {
      payload.accessCode = accessCode;
    }

    try {
      await client.post(apiUrl, payload);
      successfulVotes += 1;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response
          ? `${error.response.status} - ${JSON.stringify(error.response.data)}`
          : error.message;
        errors.push(`Kết nối lỗi: ${errorMessage}`);
      } else {
        errors.push(`Lỗi không xác định: ${String(error)}`);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  let msg = `Hoàn thành! Thành công ${successfulVotes}/${count}.`;
  if (errors.length > 0) {
    const errorDetails = errors.slice(0, 5).join("\n");
    msg += `\n\nChi tiết một số lỗi:\n${errorDetails}`;
  }

  return msg;
}
