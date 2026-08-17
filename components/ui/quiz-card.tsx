import Link from "next/link";

interface QuizCardProps {
  href: string;
  title: string;
  description: string;
}

export function QuizCard({ href, title, description }: QuizCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-1 rounded-lg border border-zinc-200 p-4 text-left transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800/50 dark:focus-visible:ring-white"
    >
      <span className="font-medium">{title}</span>
      <span className="text-sm text-zinc-600 dark:text-zinc-400">{description}</span>
    </Link>
  );
}
