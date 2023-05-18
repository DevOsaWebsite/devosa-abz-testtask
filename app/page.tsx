import React from "react";


import { Hero } from '@/components/Hero'
import { CardsSection } from "@/components/Users/CardsSection";
{/* @ts-expect-error Async Server Component */ }
export default function Home() {
	return (
		<>
			<Hero />
			<CardsSection />
		</>
	);
}