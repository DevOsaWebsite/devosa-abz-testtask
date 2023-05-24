import React from "react";

import styles from '@/lib/styles/hero.module.scss';

import { BackgroundImage } from './BackgroundImage'
import { backgroundImage } from "@/lib/background-image";
import classNames from "classnames";
import { CONTENT } from "@/lib/data";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { SignUp } from "./Login";

const maxHeight = [500, 500, 650];

export const Hero: React.FC = () => {
	const heading = CONTENT.hero.heading;
	const text = CONTENT.hero.text;
	return (
		<section className={styles.root}>
			<BackgroundImage backgroundImageSrc={backgroundImage.lg}
			/>
			<HeroContent heading={heading} text={text} />
		</section>
	)
}
interface HeroContent {
	heading: string;
	text?: string;
}

const HeroContent: React.FC<HeroContent> = (props) => {
	const { heading, text } = props;
	const contentCN = classNames(
		styles.root__content,
		'container'
	)
	return (
		<div className={contentCN}>
			<Heading>{heading}</Heading>
			<Text>{text}</Text>
			<SignUp />
		</div>
	)
}