export interface VotePayload {
  presentation: number;
  slide: number;
  audience: string;
  slideTimestamp: string;
  vote: number[];
  config: {
    timeToAnswer: number;
    quizTimestamp: number[];
    multipleChoice: boolean;
    isCorrectGetPoint: boolean;
    stopSubmission: boolean;
    fastAnswerGetMorePoint: boolean;
    otherCorrectQuiz: (string | number)[];
    showVotingResultsOnAudience: boolean;
    version: number;
  };
  type: string;
  accessCode?: string;
}
