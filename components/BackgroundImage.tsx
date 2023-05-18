import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from '@/styles/backgroundImage.module.scss'


interface BackgroundImage {
	backgroundImageSrc: StaticImageData
}

export const BackgroundImage: React.FC<BackgroundImage> = (props) => {
	const { backgroundImageSrc } = props;

	return (
		<div className={styles.root}>
			<div className={styles.root__cover} />
			<Image
				src={backgroundImageSrc}
				priority={true}
				// width={1170}
				// height={650}
				alt="3"
				className={styles.root__image}
			/>
		</div>
	)
}