
import styles from '@/styles/users.module.scss';
import React, { Suspense } from 'react';
import { Card } from './Card';

async function getData(page: number = 1) {

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
type CardListLayout = {
	users: {
		name: string;
		photo: string;
	}
}

export const CardListLayout = async () => {

	const page = 2;
	const data = await getData(page);
	const { users } = await data;
	console.log(data.users);
	return (
		<React.Fragment>
			<div className={styles.root} >
				<Suspense fallback={<Fallback />}></Suspense>
				<div>
					{
						!!users && users.map((user: {
							name: string;
							photo: string;
						}, index: number) => (
							<article key={index}>
								<Card
									userName={user.name}
									src={user.photo}
								/>
							</article>
						))
					}
				</div>
			</div >
		</React.Fragment>
	)
}

const Fallback = () => <p style={{ color: "red" }}>Loading feed...</p>