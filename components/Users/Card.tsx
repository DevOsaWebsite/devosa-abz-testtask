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
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis cumque quos neque enim hic, qui, fugit reprehenderit, doloremque et perferendis fugiat accusantium? Corporis aut sapiente aspernatur maxime ipsam a!"
export const Card: React.FC<UserCardProps> = (props) => {
	const { src, userName = text } = props;
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
			<Text type="p2">{userName}</Text>
		</Tooltip>
	)
}

