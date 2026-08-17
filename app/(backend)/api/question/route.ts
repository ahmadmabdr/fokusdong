import { NextRequest, NextResponse } from "next/server";
import { quizzes } from "@/lib/data/quizzes";

export async function GET(request: NextRequest) {
  const quizId = request.nextUrl.searchParams.get("quizId");

  if (!quizId) {
    return NextResponse.json(
      { error: "Missing required query parameter: quizId" },
      { status: 400 }
    );
  }

  const quiz = quizzes.find((quiz) => quiz.id === quizId);

  if (!quiz) {
    return NextResponse.json(
      { error: `No quiz found with id: ${quizId}` },
      { status: 404 }
    );
  }

  return NextResponse.json({ quizId: quiz.id, questions: quiz.questions });
}
