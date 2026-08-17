"use client";

interface OptionButtonProps {
  label: string;
  optionLetter: string;
  selected?: boolean;
  onClick?: () => void;
}

export function OptionButton({ label, optionLetter, selected, onClick }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
        selected
          ? "border-zinc-900 bg-zinc-100 dark:border-white dark:bg-zinc-800"
          : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800/50"
      }`}
    >
      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-zinc-300 text-sm dark:border-zinc-600">
        {optionLetter}
      </span>
      <span>{label}</span>
    </button>
  );
}
