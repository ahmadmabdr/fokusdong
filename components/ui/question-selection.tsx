interface QuestionSelectionProps {
  questionNumber: number;
  selected?: boolean;
  onClick?: () => void;
}

export function QuestionSelection({ questionNumber, selected, onClick }: QuestionSelectionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex aspect-square w-full items-center justify-center rounded-lg border text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white ${
        selected
          ? "border-zinc-900 bg-zinc-100 dark:border-white dark:bg-zinc-800"
          : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800/50"
      }`}
    >
      {questionNumber}
    </button>
  )
}