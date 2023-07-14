"use client"

import React from "react";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles"

import { theme } from "@/lib/theme";

interface MyThemeProvider {
	children: React.ReactNode;
}
export const MyThemeProvider: React.FC<MyThemeProvider> = (props) => {
	const { children } = props;
	const mode = 'light';
	return (
		<CssVarsProvider theme={theme} defaultColorScheme={mode} defaultMode={mode} >
			{children}
		</CssVarsProvider>
	)
}