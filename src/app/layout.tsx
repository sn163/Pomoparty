import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pomoparty",
  description: "Social Pomodoro Timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
