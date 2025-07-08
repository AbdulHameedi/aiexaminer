import { AxiosError } from "axios";
import API, {
  GenerateQuizRequest,
  QuizResponse,
  CreateQuizSessionRequest,
  QuizSessionResponse,
  SubmitAnswerRequest,
  QuizResultsResponse,
  ApiResponse,
  ApiError,
} from "../types/api";
export const generateQuiz = async (
  data: GenerateQuizRequest
): Promise<QuizResponse> => {
  try {
    const response = await API.post<ApiResponse<QuizResponse>>(
      "/quizzes/generate",
      data
    );
    if (response.data.success) {
      return response.data.data;
    }
    throw new Error(response.data.message || "Failed to generate quiz");
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response?.data as ApiError)?.detail?.[0]?.msg ||
        "Error generating quiz";
      throw new Error(message);
    }
    throw new Error("An unexpected error occurred");
  }
};

// Create a quiz session
export const createQuizSession = async (
  quizId: string,
  data: CreateQuizSessionRequest
): Promise<QuizSessionResponse> => {
  try {
    const response = await API.post<ApiResponse<QuizSessionResponse>>(
      `/quizzes/${quizId}/sessions`,
      data
    );
    if (response.data.success) {
      return response.data.data;
    }
    throw new Error(response.data.message || "Failed to create quiz session");
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response?.data as ApiError)?.detail?.[0]?.msg ||
        "Error creating quiz session";
      throw new Error(message);
    }
    throw new Error("An unexpected error occurred");
  }
};

// Submit an answer
export const submitAnswer = async (
  sessionId: string,
  data: SubmitAnswerRequest
): Promise<string> => {
  try {
    const response = await API.post<ApiResponse<string>>(
      `/sessions/${sessionId}/answer`,
      data
    );
    if (response.data.success) {
      return response.data.data;
    }
    throw new Error(response.data.message || "Failed to submit answer");
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response?.data as ApiError)?.detail?.[0]?.msg ||
        "Error submitting answer";
      throw new Error(message);
    }
    throw new Error("An unexpected error occurred");
  }
};

// Get quiz results
export const getQuizResults = async (
  sessionId: string
): Promise<QuizResultsResponse> => {
  try {
    const response = await API.get<ApiResponse<QuizResultsResponse>>(
      `/sessions/${sessionId}/results`
    );
    if (response.data.success) {
      return response.data.data;
    }
    throw new Error(response.data.message || "Failed to fetch quiz results");
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response?.data as ApiError)?.detail?.[0]?.msg ||
        "Error fetching quiz results";
      throw new Error(message);
    }
    throw new Error("An unexpected error occurred");
  }
};
