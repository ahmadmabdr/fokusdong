interface ButtonGroupProps {
  children: React.ReactNode;
}

export function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className="flex justify-center gap-2">{children}</div>;
}
