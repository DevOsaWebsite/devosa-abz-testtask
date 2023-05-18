import React from "react";
import { CONTENT } from "@/lib/data"
import { SectionLayout } from "./design"
import { CardListLayout } from "./Users/CardListLayout";

type UsersCardsSection = {
	usersList?: {};
}

export const UsersCardsSection = () => {
	const heading = CONTENT.usersGetSection.heading;
	
	return (
		<SectionLayout
			heading={heading} >
			<CardListLayout />
		</SectionLayout>
	)
}