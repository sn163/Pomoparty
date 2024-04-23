"use client";
import Link from "next/link";
import Image from "next/image";
import { TimerContextProvider } from "./_components/context/TimerContext";
import Timer from "./_components/timer/Timer";
import { ThemedButton } from "./_components/ui/ThemedButton";
import TaskList from "./_components/TaskList";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-20">
      <TimerContextProvider>
        <Timer />
      </TimerContextProvider>
      <Link href="/duo-timer">
        <ThemedButton alt="duo session" variant="solid" size="md">
          <Image
            src="/svg/duo.svg"
            style={{ height: "auto" }}
            alt="duo"
            height={20}
            width={20}
          />
          Duo Session
        </ThemedButton>
      </Link>
      <TaskList />
    </main>
  );
}
