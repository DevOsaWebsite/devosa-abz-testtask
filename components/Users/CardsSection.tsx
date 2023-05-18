'use client'

import React from "react";
import { CONTENT } from "@/lib/data"
import { Button, SectionLayout } from "../design"
import { CardListLayout } from "./CardListLayout";

const getUsers = async (page: number) => {

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

export const CardsSection: React.FC = () => {

	const [users, setUsers] = React.useState([]);
	const [nextUrl, setNextUrl] = React.useState(null);
	const [page, setPage] = React.useState(1);
	const heading = CONTENT.usersGetSection.heading;
	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getUsers(page);
				setUsers(data.users);
				setNextUrl(data.links.next_url);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [page]);

	const handleClick = () => {
		setPage(page + 1);
	}
	return (
		<SectionLayout heading={heading}>
			<CardListLayout users={users} />
			{!!nextUrl && <Button onClick={handleClick}>Click</Button>} 
		</SectionLayout>
	);
};