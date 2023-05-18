
import styles from '@/styles/users.module.scss';
import React, { Suspense } from 'react';
import { UserCard } from './UserCard';
import { Button } from '@mui/material';

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

export const UsersCardsLayout = async () => {
	// const [users, setUsers] = React.useState([]);
	const page = 2;

	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const data = await getData(page);
	// 			setUsers(data.users);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	fetchData();
	// }, [page])
	const data = await getData(page);
	const { users } = await data;
	console.log(data.users);
	return (
		<div className={styles.root} >
			<Suspense fallback={<Fallback />}></Suspense>
			<div>
				{
					!!users && users.map((user, index) => (
						<article key={user?.id || index}>
							<UserCard />
						</article>
					))
				}
			</div>
		</div >
	)
}

const Fallback = () => <p style={{ color: "red" }}>Loading feed...</p>