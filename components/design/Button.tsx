'use client'

import React from "react";

import { Button as MUiButton } from "@mui/material";


interface Button {
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
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