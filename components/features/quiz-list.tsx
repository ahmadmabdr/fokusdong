import { QuizCard } from "@/components/ui/quiz-card";
import type { QuizSummary } from "@/lib/types/quiz";

interface QuizListProps {
  quizzes: QuizSummary[];
}

export function QuizList({ quizzes }: QuizListProps) {
  return (
    <div className="flex flex-col gap-2">
      {quizzes.map((quiz) => (
        <QuizCard
          key={quiz.id}
          href={`/quiz?quizId=${quiz.id}`}
          title={quiz.title}
          description={quiz.description}
        />
      ))}
    </div>
  );
}
