import axios from "axios";
const API = axios.create({
  baseURL: "https://aigojo.onrender.com/api/v1/"
});
export default API;

export interface UploadResponseProps {
  filename: string;
  upload_timestamp: string;
  topics: string[];
}
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  created_at: string;
}

export interface Document {
  id: string;
  title: string;
  filename: string;
  file_type: 'pdf' | 'docx' | 'txt' | 'pptx';
  upload_date: string;
  size: number;
  status: 'processing' | 'ready' | 'error';
  page_count?: number;
}

export interface Quiz {
  id: string;
  title: string;
  document_id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question_count: number;
  created_at: string;
  questions: Question[];
}

export interface Question {
  id: string;
  type: 'multiple_choice' | 'true_false' | 'short_answer' | 'essay';
  question: string;
  options?: string[];
  correct_answer: string;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export interface QuizSession {
  id: string;
  quiz_id: string;
  user_id: string;
  started_at: string;
  completed_at?: string;
  score?: number;
  total_questions: number;
  answers_submitted: number;
  status: 'active' | 'completed' | 'abandoned';
}

export interface Answer {
  question_id: string;
  answer: string;
  is_correct: boolean;
  time_taken: number;
  hints_used: number;
}

export interface QuizResult {
  session_id: string;
  score: number;
  percentage: number;
  total_questions: number;
  correct_answers: number;
  time_taken: number;
  answers: Answer[];
  performance_analysis: {
    strengths: string[];
    weaknesses: string[];
    recommendations: string[];
  };
}

export interface Progress {
  user_id: string;
  document_id: string;
  quizzes_taken: number;
  average_score: number;
  total_time_spent: number;
  last_activity: string;
  mastery_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  topics_mastered: string[];
  topics_struggling: string[];
}

export interface Hint {
  id: string;
  question_id: string;
  level: 'basic' | 'intermediate' | 'advanced';
  type: 'definition' | 'example' | 'elimination' | 'concept_clarification';
  content: string;
  cost: number;
  effectiveness_rating: number;
}

export interface UserStats {
  user_id: string;
  total_hints_used: number;
  hints_by_type: Record<string, number>;
  hints_by_level: Record<string, number>;
  total_tokens_spent: number;
  average_effectiveness_rating: number;
  favorite_hint_types: string[];
}

export interface Gamification {
  user_id: string;
  level: number;
  experience_points: number;
  hint_tokens: number;
  daily_streak: number;
  last_daily_bonus: string;
  achievements: Achievement[];
  badges: Badge[];
  leaderboard_rank: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked_at: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned_at: string;
  category: string;
} 