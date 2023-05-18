import React from "react";


import { Hero } from '@/components/Hero'
import { UsersCardsSection } from "@/components/UsersCardsSection";

export default function Home() {

	return (
		<React.Fragment>
			<Hero />
			<UsersCardsSection />
		</React.Fragment>
	)
}
