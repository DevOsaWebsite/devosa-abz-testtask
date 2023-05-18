
import { CONTENT } from '@/lib/data';
import styles from '@/styles/users.module.scss';
import Image from 'next/image';

type UserCard = {

}

export const UserCard: React.FC<UserCard> = (props) => {
	const { } = props;
	return (
		<div className={styles.card}>
			<CardImage />
			<CardContent />
		</div>
	)
}

const CardImage = () => {

	return (
		<div className={styles.card__image}>
			<Image
				src={CONTENT.users.card.defaultImage}
				alt={""}
				width={70}
				height={70}
			/>
		</div>
	)
}

const CardContent = () => {

	return (
		<div>
			content
		</div>
	)
}