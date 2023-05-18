'use client'

import React from "react";

import { Button as MUiButton } from "@mui/material";

interface Button {
	children: React.ReactNode;
}

export const Button: React.FC<Button> = (props) => {
	const { children } = props;
	
	return (
		<MUiButton variant="contained" disableElevation
		>
			{children}
		</MUiButton>
	)
}