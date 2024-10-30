import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const metadata: Metadata = {
  title: "BlinkSpeak",
  description: "Switch-based Interface for Augmented Alternative Communication (AAC) Using a Single Key Input (e.g., Eye Blink)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
