
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
				<div>
					{
						!!users && users.map((user: UserCard) => (
							<article key={user.id}>
								<Card
									userName={user.name}
									src={user.photo}
								/>
							</article>
						))
					}
				</div>
			</div >
		</>
	)
}

const Fallback = () => <p style={{ color: "red" }}>Loading feed...</p>