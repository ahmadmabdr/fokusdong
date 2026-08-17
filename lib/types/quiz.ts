export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizSummary {
  id: string;
  title: string;
  description: string;
}

export interface Quiz extends QuizSummary {
  questions: QuizQuestion[];
  totalQuestions: number;
}

export interface QuizDetail extends QuizSummary {
  totalQuestions: number;
  questionIds: string[];
}
