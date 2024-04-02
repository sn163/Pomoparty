"use client";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="nav-root navbar px-16 py-3 opacity-95 drop-shadow-lg">
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
          <button className="prose text-white">Features</button>
        </a>
        <a>
          <button className="prose text-white">Sign In</button>
        </a>
        <button className="btn btn-accent w-24 border-2 text-primary shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
}
