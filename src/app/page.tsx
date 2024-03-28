"use client";

type User = {
  id: number;
  name: string;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to Pomoparty</div>
    </main>
  );
}
