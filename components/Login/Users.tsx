"use client"
import React from "react";
import { Button } from "@/components/design";

import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
export const Users = () => {
	const icon = true;
	const text = icon ? <AssignmentIndTwoToneIcon /> : "Users"
	return (
		<Button>
			{text}
		</Button>
	)
}