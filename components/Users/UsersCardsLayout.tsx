
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

export const UsersCardsLayout = () => {
	const [users, setUsers] = React.useState([]);
	const page = 2;

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getData(page);
				setUsers(data.users);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [page])

	console.log(users);
	return (
		<div className={styles.root} >
			<Suspense fallback={<Fallback />}>
				<div>
					{
						// !!usersList && usersList.map((userCard, index) => (
						// 	<article key={userCard?.id || index}>
						// 		<Suspense fallback={<Fallback />}>
						// 			<UserCard />
						// 		</Suspense>
						// 	</article>
						// ))
					}
				</div>
			</Suspense>
			<Button>Show more</Button>
		</div >
	)
}

const Fallback = () => <p>Loading feed...</p>