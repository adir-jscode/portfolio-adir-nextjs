import type { Metadata } from "next";
import "./globals.css";
// fonts.ts
import { Anton, Oswald } from "next/font/google";

// Anton (big bold headings)
export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Oswald (alternative for headings/subtitles)
export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home - Md Sarafat Ali Adir",
  description: "Code your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.className} ${oswald.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
