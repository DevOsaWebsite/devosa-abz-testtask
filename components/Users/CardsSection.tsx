'use client';
import React from 'react';
import { CONTENT } from '@/lib/data';
import { Button, SectionLayout } from '../design';
import { CardListLayout } from './CardListLayout';
import { getUsers } from '@/lib/users';
import dynamic from 'next/dynamic';

const DynamicFallback = dynamic(() => import('../design/Fallback'));

export const CardsSection = () => {
  const heading = CONTENT.usersGetSection.heading;

  const [loading, setLoading] = React.useState(true);

  const [users, setUsers] = React.useState<any[]>([]);
  const [nextUrl, setNexUrl] = React.useState<string | null>();

  const [page, setPage] = React.useState('1');
  console.log(nextUrl);
  React.useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await getUsers(page);
      setUsers([...users, ...response?.users]);
      setNexUrl(response?.next_url);
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleClick() {
    setPage((+page + 1).toString());
  }
  return (
    <SectionLayout heading={heading}>
      <CardListLayout users={users} />
      {loading && <DynamicFallback />}
      {!!nextUrl && <Button onClick={handleClick}>Show more</Button>}
    </SectionLayout>
  );
};
