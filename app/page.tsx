import React from "react";


import { Hero } from '@/components/Hero'
import { CardsSection } from "@/components/Users/CardsSection";


export default function Home() {
	return (
		<>
			<Hero />
			{/* @ts-expect-error Async Server Component */}
			<CardsSection />
		</>
	);
}