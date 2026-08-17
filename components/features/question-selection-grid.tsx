"use client";

import { QuestionSelection } from "@/components/ui/question-selection";

interface QuestionSelectionGridProps {
  totalQuestions: number;
  selectedQuestionNumber?: number | null;
  onSelectQuestion?: (questionNumber: number) => void;
}

export function QuestionSelectionGrid({
  totalQuestions,
  selectedQuestionNumber,
  onSelectQuestion,
}: QuestionSelectionGridProps) {
  return (
    <div className="grid grid-cols-10 gap-2">
      {Array.from({ length: totalQuestions }, (_, index) => index + 1).map((questionNumber) => (
        <QuestionSelection
          key={questionNumber}
          questionNumber={questionNumber}
          selected={questionNumber === selectedQuestionNumber}
          onClick={() => onSelectQuestion?.(questionNumber)}
        />
      ))}
    </div>
  );
}
