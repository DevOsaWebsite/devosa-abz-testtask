import React from 'react';
import { CONTENT } from '@/lib/data';
import styles from '@/lib/styles/users.module.scss';
import { UserImage } from '@/components/design/Images';

export const CardUserImage: React.FC<UserCardImage> = ({ photo, name }) => {
  return (
    <div className={styles.card__image}>
			<UserImage src={photo || CONTENT.users.card.defaultImage} alt={name}
		/>
    </div>
  );
};
