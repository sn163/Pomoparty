"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar fixed z-10 bg-primary px-16 py-2 drop-shadow-lg">
      <Link
        className="mr-auto flex font-title text-4xl tracking-wider text-base-100"
        href="/"
      >
        P
        <Image
          src="/svg/pizza.svg"
          height={33}
          width={33}
          alt="pomoparty-logo"
          priority={true}
        />
        MOPARTY
      </Link>
      <div className="font-display ml-auto flex items-center space-x-6">
        <Link href="/contact">
          <button className="text-white">Contact</button>
        </Link>
        <Link href="#">
          <button className="text-white">Sign In</button>
        </Link>
        <Link href="#">
          <button className="btn btn-accent border-2 text-primary shadow-md">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
