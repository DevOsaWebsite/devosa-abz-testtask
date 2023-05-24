import React from 'react';

import styles from '@/lib/styles/users.module.scss';

import { CardUserImage } from './CardUserImage';
import { Text } from '../Text';


export const Card: React.FC<UserCard> = (props) => {
	const { photo, name, email, phone, position } = props;
	return (
		<div className={styles.card}>
			<CardUserImage photo={photo} name={name} />
			<div className={styles.card__text}>
				<CardUserData text={position} />
			</div>	
			<div className={styles.card__text}>
				<CardUserData text={position} />
				<CardUserData text={phone} />
				<CardUserData text={email} />
			</div>
		</div>
	)
}
const CardUserData: React.FC<CardUserData> = ({ text }) => {

	return (
		<Text type="p2">{text}</Text>
	)
}
