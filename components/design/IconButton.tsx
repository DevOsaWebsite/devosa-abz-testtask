'use client'

import React from "react"

import { Icon, IconButton as MuiIconButton } from "@mui/material";

interface IconButoon {
	children: React.ReactNode;
}

export const IconButton: React.FC<IconButoon> = (props) => {
	const { children } = props;
	return (
		<MuiIconButton color="primary">
			<Icon>{children}</Icon>
		</MuiIconButton>
	)
}