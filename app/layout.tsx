import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Toaster from "./toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Archr",
  description:
    "Archr.ai ",
    metadataBase: 'https://archr.ai'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        {children}
        <Toaster />
      </body>
      <Analytics />
    </html>
  );
}
