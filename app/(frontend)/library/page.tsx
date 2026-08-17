"use client";

import { QuizList } from "@/components/features/quiz-list";
import { useQuizzesQuery } from "@/hooks/queries/use-quizzes-query";

export default function Library() {
  const { data: quizzes, error, isLoading } = useQuizzesQuery();

  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 p-4 font-sans dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-lg font-semibold">Library</h1>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        {isLoading && <p className="text-sm text-zinc-500">Loading quizzes...</p>}
        {quizzes && <QuizList quizzes={quizzes} />}
      </div>
    </div>
  );
}
