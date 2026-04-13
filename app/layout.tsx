import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Görev Takip",
  description: "Proje yönetim ve hata takip aracı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased h-screen bg-[#000000] text-[#ededed] text-sm`}
      >
        {children}
      </body>
    </html>
  );
}
