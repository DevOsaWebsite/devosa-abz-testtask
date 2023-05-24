'use client';
import React from 'react';
import { CONTENT } from '@/lib/data';
import { SectionLayout } from '../design';
import { CardListLayout } from './CardListLayout';
import { ShowMore } from '../ShowMore';
import { useUsers } from '@/lib/hooks/useUsers';

const heading = CONTENT.usersGetSection.heading;

export const CardsSection = () => {
  const [cnt, setCnt] = React.useState(1);
	const onClick = () => setCnt(cnt + 1);
	
	const { data } = useUsers(cnt);
	
	const pages = [];
	
  for (let i = 0; i < cnt; i++) {
    pages.push(<CardListLayout index={i + 1} key={i} />);
	}
	
  const isShow = data?.next_url;
  return (
    <SectionLayout heading={heading}>
      {pages}
      {isShow && <ShowMore onClick={onClick} />}
    </SectionLayout>
  );
};
