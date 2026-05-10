import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashishkumar Verma | AI/ML Engineer | Full Stack AIML Engineer",
  description: "Personal portfolio of Ashishkumar Verma, an AI/ML Engineer specialized in building production-ready systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
