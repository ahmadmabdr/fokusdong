"use client";

import { OptionButton } from "@/components/ui/option-button";

interface MultipleChoiceQuestionProps {
  questionNumber: number;
  question: string;
  options: string[];
  selectedOption?: number;
  onSelectOption?: (index: number) => void;
}

export function MultipleChoiceQuestion({
  questionNumber,
  question,
  options,
  selectedOption,
  onSelectOption,
}: MultipleChoiceQuestionProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">
        {questionNumber}. {question}
      </p>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <OptionButton
            key={index}
            label={option}
            optionLetter={String.fromCharCode(65 + index)}
            selected={selectedOption === index}
            onClick={() => onSelectOption?.(index)}
          />
        ))}
      </div>
    </div>
  );
}
