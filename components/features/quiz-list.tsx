import { QuizCard } from "@/components/ui/quiz-card";
import { Stack } from "@/components/ui/stack";
import type { QuizSummary } from "@/lib/types/quiz";

interface QuizListProps {
  quizzes: QuizSummary[];
}

export function QuizList({ quizzes }: QuizListProps) {
  return (
    <Stack>
      {quizzes.map((quiz) => (
        <QuizCard
          key={quiz.id}
          href={`/quiz?quizId=${quiz.id}`}
          title={quiz.title}
          description={quiz.description}
        />
      ))}
    </Stack>
  );
}
