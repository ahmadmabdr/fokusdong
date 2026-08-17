import { NextResponse } from "next/server";
import { quizzes } from "@/lib/data/quizzes";
import type { QuizDetail } from "@/lib/types/quiz";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const quiz = quizzes.find((quiz) => quiz.id === id);

  if (!quiz) {
    return NextResponse.json({ error: `No quiz found with id: ${id}` }, { status: 404 });
  }

  const detail: QuizDetail = {
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    totalQuestions: quiz.totalQuestions,
    questionIds: quiz.questions.map((question) => question.id),
  };

  return NextResponse.json(detail);
}
