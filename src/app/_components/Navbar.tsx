"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar fixed bg-primary px-16 py-2 drop-shadow-lg">
      <a className="flex-1" href="/">
        <Image
          src="/pomoparty-logo-white.webp"
          className="h-auto w-auto"
          height={50}
          width={200}
          alt="pomoparty-logo"
          priority={true}
        />
      </a>
      <div className="flex space-x-6">
        <Link href="/duo-timer">
          <button className="prose text-white">Duo Session</button>
        </Link>
        <Link href="/contact">
          <button className="prose text-white">Contact</button>
        </Link>
        <a>
          <button className="prose text-white">Features</button>
        </a>
        <a>
          <button className="prose text-white">Sign In</button>
        </a>
        <a>
          <button className="btn btn-accent w-24 border-2 text-primary shadow-md">
            Sign Up
          </button>
        </a>
      </div>
    </div>
  );
}
