'use client';
import React from 'react';
import { CardListLayout } from './CardListLayout';
import { ShowMore } from '../ShowMore';
import { useUsers } from '@/lib/hooks/useUsers';

export const CardsSection = () => {
  const [cnt, setCnt] = React.useState(1);

  const { data } = useUsers(cnt);
	const isShow = data?.next_url;
	
  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(<CardListLayout index={i + 1} key={i} />);
  }

  const onClick = () => setCnt(cnt + 1);

  return (
    <>
      {pages}
      {isShow && <ShowMore onClick={onClick} />}
    </>
  );
};
