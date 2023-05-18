import React from 'react';

import { UserImage } from '@/components/design/Images';

import styles from '@/styles/users.module.scss';
import { CONTENT } from '@/lib/data';
import { Text } from '../Text';
import { Tooltip } from '../design/Tooltip';

type UserCardProps = CardUserImage & CardUserName;

interface CardUserName {
	userName: string;
}

interface CardUserImage {
	src: string;
	userName: string;
}

interface CardContentProps {
	userName: string;
}

export const UserCard: React.FC<UserCardProps> = (props) => {
	const { src, userName = "victor" } = props;
	return (
		<div className={styles.card}>
			<CardUserImage src={src} userName={userName} />
			<CardContent userName={userName} />
		</div>
	)
}

const CardUserImage: React.FC<CardUserImage> = ({ src, userName }) => {
	return (
		<div className={styles.card__image}>
			<UserImage
				src={src || CONTENT.users.card.defaultImage}
				alt={userName}
			/>
		</div>
	)
}

const CardContent: React.FC<CardContentProps> = ({ userName }) => {
	return (
		<div>
			<CardUserName userName={userName} />
		</div>
	)
}

const CardUserName: React.FC<CardUserName> = ({ userName }) => {

	return (
		<Tooltip title={userName}>
			<Text>{userName}</Text>
		</Tooltip>
	)
}

