import React from "react";

import classNames from "classnames";
import styles from '@/styles/text.module.scss';

interface Text {
	children: React.ReactNode;
	variant?: string;
}

export const Text: React.FC<Text> = (props) => {
	const { children, variant = "p1" } = props;

	const textCN = classNames(
		styles.root,
		styles[variant]
	)
	return (
		<p className={textCN}>{children}</p>
	)
}