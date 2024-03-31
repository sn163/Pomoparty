"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
	return (
		<div className="navbar nav-root drop-shadow-lg opacity-95 px-16 py-3">
			<a className="flex-1" href="/">
				<Image
					src="/pomoparty-logo-white.png"
					height={50}
					width={200}
					alt="pomoparty-logo"
				/>
			</a>
			<div className="flex justify-center space-x-6">
				<Link href="/contact" passHref>
					<button className="text-white">Contact</button>
        </Link>
				<Link href="/features" passHref>
					<button className="text-white">Features</button>
				</Link>
				<Link href="/signin" passHref>
					<button className="text-white">Sign In</button>
				</Link>
				<button className="btn rounded-full btn-primary-content text-primary border-2 shadow-md">
          Sign Up
        </button>
      </div>
    </div>
	);
}