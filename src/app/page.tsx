"use client";
import Dashboard from "./_components/Dashboard";
import NavBar from './_components/Navbar';

export default function Home() {
	return (
		<>
			<NavBar/>
			<Dashboard startHr={0} startMin={0} startSec={5} />
		</>
	);
}
