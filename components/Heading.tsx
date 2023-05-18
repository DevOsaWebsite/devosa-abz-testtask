import React from "react";

import styles from "@/styles/heading.module.scss";

interface Heading {
	children: React.ReactNode;
	color?: string;
}
export const Heading: React.FC<Heading> = (props) => {
	const { children } = props;

	return (
		<p className={styles.root}>{children}</p>
	)
}