"use client";

import { useQuery } from "@/hooks/use-query";
import { fetchQuizById } from "@/lib/api/quiz";

export function useQuizQuery(quizId: string | null) {
  return useQuery(() => fetchQuizById(quizId as string), [quizId], {
    enabled: quizId !== null,
  });
}
