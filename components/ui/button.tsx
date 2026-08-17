interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ children, variant = "primary", disabled, onClick }: ButtonProps) {
  const variantClassName =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      : "border border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800/50";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex h-12 items-center justify-center rounded-lg px-6 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-white ${variantClassName}`}
    >
      {children}
    </button>
  );
}
