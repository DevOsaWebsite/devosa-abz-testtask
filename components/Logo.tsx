import Image from "next/image";
import React from "react";
import logoImageSrc from '@/public/logo.svg'
import Link from "next/link";

export const Logo: React.FC = () => {

	return (
		<Link
			href={"/"}
		>
			<Image
				src={logoImageSrc}
				width={104}
				height={26}
				alt="testtask logo"
			/>
		</Link>
	)
}