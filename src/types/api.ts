import axios from "axios";
const API = axios.create({
  baseURL: "https://aigojo.onrender.com/api/v1/"
});
export default API;

export interface UploadResponseProps {
  filename: string;
  upload_timestamp: string;
  topics: string[];
  file_type: string;
  id?: string;
}
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  created_at: string;
}
export interface GenerateQuizRequest {
  document_id: string;
  user_id: string;
  selected_topics: string[];
  difficulty: "easy" | "medium" | "hard";
  question_types: string[];
  question_count: number;
  hints_enabled: boolean;
  max_hints_per_question: number;
}

export interface QuizQuestion {
  id: string;
  question_text: string;
  question_type: string;
  options: string[];
  difficulty: string;
}

export interface QuizResponse {
  _id: string;
  document_id: string;
  user_id: string;
  title: string;
  question_count: number;
  topics: string[];
  difficulty: string;
  question_types: string[];
  questions: QuizQuestion[];
  hints_enabled: boolean;
  created_at: string;
}

export interface CreateQuizSessionRequest {
  user_id: string;
  hints_enabled: boolean;
}

export interface QuizSessionResponse {
  id: string;
  total_questions: number;
  current_question: number;
  score: number;
  is_completed: boolean;
  hints_enabled: boolean;
  hint_tokens_available: number;
}

export interface SubmitAnswerRequest {
  question_id: string;
  user_answer: string;
  hints_used: string[];
}

export interface QuizResultsResponse {
  session_id: string;
  score: number;
  correct_answers: number;
  total_questions: number;
  // answers: Record<string, any>[]; 
  completed_at: string;
  total_hints_used: number;
  points_before_hints: number;
  points_after_hints: number;
  achievements_earned: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  detail: { loc: (string | number)[], msg: string, type: string }[];
}