import { NextResponse } from "next/server";
import { quizzes } from "@/lib/data/quizzes";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const question = quizzes
    .flatMap((quiz) => quiz.questions)
    .find((question) => question.id === id);

  if (!question) {
    return NextResponse.json({ error: `No question found with id: ${id}` }, { status: 404 });
  }

  return NextResponse.json(question);
}
