interface StackProps {
  children: React.ReactNode;
  gap?: 2 | 4;
}

export function Stack({ children, gap = 2 }: StackProps) {
  return <div className={`flex flex-col ${gap === 4 ? "gap-4" : "gap-2"}`}>{children}</div>;
}
