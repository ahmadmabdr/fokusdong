interface QuestionGridProps {
  children: React.ReactNode;
}

export function QuestionGrid({ children }: QuestionGridProps) {
  return <div className="grid grid-cols-10 gap-2">{children}</div>;
}
