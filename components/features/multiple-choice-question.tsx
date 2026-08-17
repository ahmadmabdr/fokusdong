"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { OptionButton } from "@/components/ui/option-button";
import { QuestionPrompt } from "@/components/ui/question-prompt";
import { Stack } from "@/components/ui/stack";

interface MultipleChoiceQuestionProps {
  questionNumber: number;
  question: string;
  options: string[];
  selectedOption?: number;
  isFirstQuestion?: boolean;
  isLastQuestion?: boolean;
  onSelectOption?: (index: number) => void;
  onPrevious?: () => void;
  onSubmit?: () => void;
}

export function MultipleChoiceQuestion({
  questionNumber,
  question,
  options,
  selectedOption,
  isFirstQuestion,
  isLastQuestion,
  onSelectOption,
  onPrevious,
  onSubmit,
}: MultipleChoiceQuestionProps) {
  return (
    <Stack gap={4}>
      <QuestionPrompt questionNumber={questionNumber} question={question} />
      <Stack>
        {options.map((option, index) => (
          <OptionButton
            key={index}
            label={option}
            optionLetter={String.fromCharCode(65 + index)}
            selected={selectedOption === index}
            onClick={() => onSelectOption?.(index)}
          />
        ))}
      </Stack>
      <ButtonGroup>
        {!isFirstQuestion && (
          <Button variant="secondary" onClick={onPrevious}>
            Previous
          </Button>
        )}
        <Button disabled={selectedOption === undefined} onClick={onSubmit}>
          {isLastQuestion ? "Submit Quiz" : "Next"}
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
