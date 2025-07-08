// hooks/useQuiz.ts
import { useMutation, useQuery } from "react-query";
import {
  generateQuiz,
  createQuizSession,
  submitAnswer,
  getQuizResults,
} from "../services/requests";
import {
  GenerateQuizRequest,
  QuizResponse,
  CreateQuizSessionRequest,
  QuizSessionResponse,
  SubmitAnswerRequest,
  QuizResultsResponse,
} from "../types/api";

// Generate a quiz
export const useGenerateQuiz = () => {
  return useMutation<QuizResponse, Error, GenerateQuizRequest>({
    mutationFn: generateQuiz,
  });
};

// Create a quiz session
export const useCreateQuizSession = () => {
  return useMutation<
    QuizSessionResponse,
    Error,
    { quizId: string; data: CreateQuizSessionRequest }
  >({
    mutationFn: ({ quizId, data }) => createQuizSession(quizId, data),
  });
};

// Submit an answer
export const useSubmitAnswer = () => {
  return useMutation<
    string,
    Error,
    { sessionId: string; data: SubmitAnswerRequest }
  >({
    mutationFn: ({ sessionId, data }) => submitAnswer(sessionId, data),
  });
};

// Get quiz results
export const useQuizResults = (sessionId: string) => {
  return useQuery<QuizResultsResponse, Error>({
    queryKey: ["quizResults", sessionId],
    queryFn: () => getQuizResults(sessionId),
    enabled: !!sessionId,
  });
};
