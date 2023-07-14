import React from 'react';
import { Button } from './design';

type Props = {
  onClick: () => any;
};

export const ShowMore = ({ onClick }: Props) => {
  return <Button onClick={onClick}>{'Show more'}</Button>;
};
