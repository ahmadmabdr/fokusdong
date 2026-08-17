"use client";

import { QuestionGrid } from "@/components/ui/question-grid";
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
    <QuestionGrid>
      {Array.from({ length: totalQuestions }, (_, index) => index + 1).map((questionNumber) => (
        <QuestionSelection
          key={questionNumber}
          questionNumber={questionNumber}
          selected={questionNumber === selectedQuestionNumber}
          onClick={() => onSelectQuestion?.(questionNumber)}
        />
      ))}
    </QuestionGrid>
  );
}
