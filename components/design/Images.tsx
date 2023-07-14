'use client';
import { CONTENT } from '@/lib/data';
import Image from 'next/image';
import React from 'react';



export const UserImage = (props: UserImageProps) => {
  const { src, alt } = props;

  const blur = CONTENT.users.card.defaultImage;

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
      loading="eager"
    />
  );
};
