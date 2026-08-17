import type { QuizDetail, QuizQuestion, QuizSummary } from "@/lib/types/quiz";

export async function fetchQuizzes(): Promise<QuizSummary[]> {
  const response = await fetch("/api/quiz");
  if (!response.ok) {
    throw new Error("Failed to load quizzes");
  }
  const data: { quizzes: QuizSummary[] } = await response.json();
  return data.quizzes;
}

export async function fetchQuizById(id: string): Promise<QuizDetail> {
  const response = await fetch(`/api/quiz/${id}`);
  if (!response.ok) {
    throw new Error("Failed to load quiz");
  }
  return response.json();
}

export async function fetchQuestionById(id: string): Promise<QuizQuestion> {
  const response = await fetch(`/api/question/${id}`);
  if (!response.ok) {
    throw new Error("Failed to load question");
  }
  return response.json();
}
