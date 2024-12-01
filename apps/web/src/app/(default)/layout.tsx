import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hono Advent Calendar 2024 Day1 Sample",
  description: "Hono Advent Calendar 2024 Day1 Sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
