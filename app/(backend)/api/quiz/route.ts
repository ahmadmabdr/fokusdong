import { NextResponse } from "next/server";
import { quizzes } from "@/lib/data/quizzes";

export async function GET() {
  const summaries = quizzes.map(({ id, title, description }) => ({
    id,
    title,
    description,
  }));

  return NextResponse.json({ quizzes: summaries });
}
