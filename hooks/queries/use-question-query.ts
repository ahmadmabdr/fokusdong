"use client";

import { useQuery } from "@/hooks/use-query";
import { fetchQuestionById } from "@/lib/api/quiz";

export function useQuestionQuery(questionId: string | null) {
  return useQuery(() => fetchQuestionById(questionId as string), [questionId], {
    enabled: questionId !== null,
  });
}
