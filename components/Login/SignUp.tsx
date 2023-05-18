"use client"
import React from "react";
import { Button, IconButton } from "@/components/design";

import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
export const SignUp = () => {
	const icon = false;
	const text = icon ? <PersonAddAltTwoToneIcon /> : "Sign Up";

	return (
		<Button>
			{text}
		</Button>

	)
}