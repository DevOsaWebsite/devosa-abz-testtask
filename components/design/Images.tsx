"use client"
import Image from 'next/image';
import React from 'react';

type UserImage = {
  src: string;
  alt: string;
};

export const UserImage: React.FC<UserImage> = props => {
	const { src, alt } = props;
	const [def, setDef] = React.useState(src);
	const onError = () => setDef('/photo-cover.svg');
  return (
    <Image
      src={def}
      alt={alt}
      width={70}
      height={70}
      className="image"
      placeholder={'blur'}
      blurDataURL="/photo-cover.svg"
      onError={onError}
    />
  );
};
