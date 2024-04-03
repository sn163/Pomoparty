"use client";
import Dashboard from "./_components/Dashboard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-4 p-20">
      <Dashboard />
      <Link href="/duo-timer">
        <button className="btn btn-primary min-w-28 justify-between">
          <Image
            src="/svg/duo.svg"
            style={{ height: "auto" }}
            alt="duo"
            height={20}
            width={20}
          />
          Duo Session
        </button>
      </Link>
    </main>
  );
}
