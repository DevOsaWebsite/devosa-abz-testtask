import React from "react";

import styles from '@/styles/tooltip.module.scss';

type TooltipProps = {
	children: React.ReactNode;
	title: string;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
	const { children, title } = props;

	return (
		<div className={styles.root} data-tooltip={title}>
			<div className={styles.root__popper}>{title}</div>
			{children}
		</div>
	)
}