"use client";
import Image from "next/image";
import Link from "next/link";
import { ThemedButton } from "./ui/ThemedButton";
import SignInModal from "./SignIn";

export default function NavBar() {
  return (
    <header className="shadowsm:flex-nowrap fixed flex w-full flex-wrap bg-base-100 py-3 text-sm sm:justify-start">
      <nav
        className="mx-auto w-full max-w-[85rem] px-7 sm:flex sm:items-center sm:justify-between"
        aria-label="navigation bar"
      >
        <Link
          className="flex font-title text-4xl tracking-wider text-primary drop-shadow-lg"
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
        <div className="mt-5 flex flex-row items-center gap-5 sm:mt-0 sm:justify-end sm:ps-5">
          <Link href="/contact">
            <ThemedButton
              className="no-underline hover:no-underline"
              alt="contact"
              variant="link"
              size="md"
            >
              Contact
            </ThemedButton>
          </Link>
          <SignInModal />
          <Link href="#">
            <ThemedButton alt="sign up" variant="solid" size="md">
              Sign Up
            </ThemedButton>
          </Link>
        </div>
      </nav>
    </header>
  );
}
