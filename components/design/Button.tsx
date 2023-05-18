'use client'

import React from "react";

import { Button as MUiButton } from "@mui/material";

import AccountBoxIcon from '@mui/icons-material/AccountBox';

interface Button {
	children?: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Button> = (props) => {
	const { children, onClick } = props;

	return (
		<MUiButton variant="contained" disableElevation
			onClick={onClick}
		>
			{children}
		</MUiButton>
	)
}