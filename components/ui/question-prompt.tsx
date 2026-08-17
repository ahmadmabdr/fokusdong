interface QuestionPromptProps {
  questionNumber: number;
  question: string;
}

export function QuestionPrompt({ questionNumber, question }: QuestionPromptProps) {
  return (
    <p className="font-medium">
      {questionNumber}. {question}
    </p>
  );
}
