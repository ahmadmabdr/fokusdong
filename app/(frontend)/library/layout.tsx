import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description: "Browse available quizzes",
};

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-1 flex-col">{children}</div>;
}
