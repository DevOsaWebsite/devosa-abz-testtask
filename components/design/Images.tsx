
import Image from "next/image"
import React from "react";

type UserImage = {
	src: string;
	alt: string;
}

export const UserImage: React.FC<UserImage> = (props) => {
	const { src, alt } = props;
	return (
		<Image
			src={src}
			alt={alt}
			width={70}
			height={70}
			className="image"
		/>
	)
}