import React from "react";


import { Hero } from '@/components/Hero'
import { CardsSection } from "@/components/Users/CardsSection";


export default async function Home() {

	return (
		<React.Fragment>
			<Hero />
			<CardsSection />
		</React.Fragment>
	)
}
