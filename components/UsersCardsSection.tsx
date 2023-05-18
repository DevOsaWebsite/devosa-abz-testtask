import React from "react";
import { CONTENT } from "@/lib/data"
import { SectionLayout } from "./design"
import { UsersCardsLayout } from "./Users/UsersCardsLayout";

type UsersCardsSection = {
	usersList?: {};
}

export const UsersCardsSection = () => {
	const heading = CONTENT.usersGetSection.heading;
	
	return (
		<SectionLayout
			heading={heading} >
			<UsersCardsLayout />
		</SectionLayout>
	)
}