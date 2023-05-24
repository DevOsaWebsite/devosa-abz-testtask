'use client';
import Image from 'next/image';
import React from 'react';

type UserImage = {
  src: string;
  alt: string;
};

export const UserImage: React.FC<UserImage> = props => {
  const { src, alt } = props;
  const blur = '/photo-cover.svg';
  const [def, setDef] = React.useState(src);
  const onError = () => setDef(blur);
  return (
    <Image
      src={def}
      alt={alt}
      width={70}
      height={70}
      className="image"
      placeholder={'blur'}
      blurDataURL={blur}
      onError={onError}
    />
  );
};
