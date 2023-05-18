
import styles from '@/styles/users.module.scss';
import React, { Suspense } from 'react';
import { Card } from './Card';

type CardListLayout = {
	users: []
}


export const CardListLayout: React.FC<CardListLayout> = ({ users }) => {

	return (
		<>
			<div className={styles.root} >
				<Suspense fallback={<Fallback />}></Suspense>
					{
						!!users && users.map((user: UserCard) => (
							<article key={user.id}>
								<Card
									name={user.name}
									phone={user.phone}
									photo={user.photo}
									email={user.email}
									position={user.position}
								/>
							</article>
						))
					}
			</div >
		</>
	)
}

const Fallback = () => <p style={{ color: "red" }}>Loading feed...</p>