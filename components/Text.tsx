import React from "react";

import classNames from "classnames";
import styles from '@/styles/text.module.scss';

interface Text {
	children: React.ReactNode;
	type?: string;
}

export const Text: React.FC<Text> = (props) => {
	const { children, type = "p1" } = props;

	const textCN = classNames(
		styles.root,
		styles[type]
	)
	return (
		<p className={textCN}>{children}</p>
	)
}