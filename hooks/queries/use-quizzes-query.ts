"use client";

import { useQuery } from "@/hooks/use-query";
import { fetchQuizzes } from "@/lib/api/quiz";

export function useQuizzesQuery() {
  return useQuery(fetchQuizzes, []);
}
