export interface Form {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'survey';
  timer?: number;
  shuffle: boolean;
  requireAll: boolean;
  showResults: boolean; // Show correct answers after completion
  allowRetake: boolean; // Allow multiple attempts
  status: 'draft' | 'published';
  createdBy: string; // Creator's name/id
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  id: string;
  formId: string;
  text: string;
  type: 'mcq' | 'dropdown' | 'rating' | 'short_text' | 'paragraph' | 'true_false';
  options: string[];
  correctAnswer?: string | number; // For quiz mode
  points: number; // Points for this question
  explanation?: string; // Explanation for the correct answer
  source: string;
  order: number;
  required: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  roll?: string;
}

export interface Response {
  id: string;
  formId: string;
  userId: string;
  answers: Record<string, string | number>;
  score?: number; // For quiz mode
  maxScore?: number; // Total possible points
  correctAnswers?: number; // Number of correct answers
  totalQuestions?: number; // Total number of questions
  timeTaken: number;
  submittedAt: string;
}

export interface FormAttempt {
  id: string;
  formId: string;
  user: User;
  startedAt: string;
  answers: Record<string, string | number>;
  timeTaken: number;
  isComplete: boolean;
}

export type QuestionType = 'mcq' | 'dropdown' | 'rating' | 'short_text' | 'paragraph' | 'true_false';

export interface BulkQuestion {
  question: string;
  type: QuestionType;
  options: string[];
  correctAnswer?: string | number;
  points: number;
  explanation?: string;
  source: string;
}

export interface ExportRequest {
  id: string;
  formId: string;
  type: 'csv' | 'pdf';
  filters?: {
    dateRange?: { start: string; end: string };
    timeRange?: { min: number; max: number };
    source?: string;
    answers?: Record<string, string>;
  };
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  createdBy: string;
  downloadUrl?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'owner' | 'editor' | 'viewer';
  formAccess: string[]; // Array of form IDs they can access
  invitedBy: string;
  invitedAt: string;
  lastActive?: string;
}

export interface BrandSettings {
  logoUrl?: string;
  brandName: string;
  primaryColor: string;
  showPoweredBy: boolean;
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  formId?: string;
  details: string;
  timestamp: string;
}