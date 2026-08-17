interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-4 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <span className="font-medium">{title}</span>
      <span className="text-sm text-zinc-600 dark:text-zinc-400">{description}</span>
    </div>
  );
}
