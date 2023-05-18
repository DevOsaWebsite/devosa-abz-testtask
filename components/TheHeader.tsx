import React from 'react';
import styles from '@/styles/footer.module.scss'
import classNames from 'classnames';
import { Logo } from './Logo';


export const TheHeader: React.FC = () => {
	return (
		<footer className={styles.root}>
			<div className={styles.root__body}>
				<TheHeaderToolbar color="black" />
				<TheHeaderToolbar container>
					<Logo />
					actions
				</TheHeaderToolbar>
			</div>
		</footer>
	)
};

interface TheHeaderToolbar {
	children?: any;
	color?: string;
	container?: Boolean;
}

const TheHeaderToolbar: React.FC<TheHeaderToolbar> = (props) => {
	const { children, color, container = false } = props;

	const toolbarCN = classNames(
		styles.toolbar,
		container && "container",
		color && styles[color]
	)
	return (
		<div className={toolbarCN}>
			{children}
		</div>
	)
}