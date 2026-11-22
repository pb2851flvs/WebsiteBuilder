import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canvas — Website Builder",
  description: "Build beautiful, responsive websites in minutes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
