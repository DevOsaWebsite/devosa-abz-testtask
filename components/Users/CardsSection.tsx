import React from "react";
import { CONTENT } from "@/lib/data"
import { SectionLayout } from "../design"
import { CardListLayout } from "./CardListLayout";

async function getUsers(page: number = 1) {

	const URL = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`;

	const res = await fetch(URL, {
		next: {
			revalidate: 60
		}
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export const CardsSection = async () => {
	const heading = CONTENT.usersGetSection.heading;
	const usersData = await getUsers(13);
	const users: [] = usersData.users;
	return (
		<SectionLayout
			heading={heading} >
			<CardListLayout users={users} />
		</SectionLayout>
	)
}