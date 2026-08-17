import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
  description: "Take a quiz",
};

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-1 flex-col px-2">{children}</div>;
}
