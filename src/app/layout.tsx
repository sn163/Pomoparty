import type { Metadata } from "next";
import { Inter, Rowdies } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "./_components/Navbar";
import TaskList from "./_components/TaskList";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rowdies",
});

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
      <body className={`${inter.variable} ${rowdies.variable}`}>
        <NavBar />
        {children}
        <SpeedInsights />
        <TaskList />
      </body>
    </html>
  );
}
