"use client";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="navbar nav-root drop-shadow-lg opacity-95 px-16 py-3">
      <a className="flex-1" href="/">
        <Image
          style={{ height: "auto", width: "auto" }}
          src="/pomoparty-logo-white.webp"
          height={50}
          width={200}
          alt="pomoparty-logo"
          priority={true}
        />
      </a>
      <div className="flex space-x-6">
        <a>
          <button className="text-white">Features</button>
        </a>
        <a>
          <button className="text-white">Sign In</button>
        </a>
        <button className="btn rounded-full btn-primary-content text-primary border-2 shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
}
