'use client';
import React from 'react';
import CardListLayout from './CardListLayout';
import { ShowMore } from '../ShowMore';
import { useUsers } from '@/lib/hooks/useGetHook';
import { preloadUsers } from '../utils/Providers/SWRProvider';

export const CardsSection = () => {
  const [cnt, setCnt] = React.useState<number>(1);
	const { data } = useUsers(cnt);
  const isShow: boolean = data?.links?.next_url;
  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(<CardListLayout index={i + 1} key={i} />);
  }

  const onClick = () => setCnt(cnt + 1);
  React.useEffect(() => {
    preloadUsers(cnt + 1);
  }, [cnt]);
  return (
    <>
      {pages}
      {isShow && <ShowMore onClick={onClick} />}
    </>
  );
};
