import React from "react";

import { Heading } from "../Heading"
import classNames from "classnames";

import styles from '@/styles/sectionLayout.module.scss';

interface SectionLayout {
	children: React.ReactNode;
	heading?: React.ReactNode;
}
export const SectionLayout: React.FC<SectionLayout> = (props) => {
	const { heading = false, children } = props;
	const rootCN = classNames(
		styles.root,
		'container'
	)
	return (
		<section className={rootCN}>
			{heading && <Heading>{heading}</Heading>}
			{children}
		</section>
	)
}