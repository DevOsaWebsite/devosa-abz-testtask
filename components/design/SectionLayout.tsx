import React from "react";

import { Heading } from "../Heading"
import classNames from "classnames";

import styles from '@/lib/styles/sectionLayout.module.scss';

interface SectionLayout {
	children: React.ReactNode;
	heading?: React.ReactNode;
}
export const SectionLayout: React.FC<SectionLayout> = (props) => {
	const { heading = false, children } = props;
	const bodyCN = classNames(
		styles.root__body,
		'container'
	)
	return (
		<section className={styles.root}>
			<div className={bodyCN}>
				{heading && <Heading>{heading}</Heading>}
				{children}
			</div>
		</section>
	)
}