'use client';
import React from 'react';
import { CONTENT } from '@/lib/data';
import { Button, SectionLayout } from '../design';
import { CardListLayout } from './CardListLayout';
import { Fallback } from '../design/Fallback';
import { getUsers } from '@/lib/users';

export const CardsSection = () => {
  const heading = CONTENT.usersGetSection.heading;

  const [loading, setLoading] = React.useState(true);

  const [users, setUsers] = React.useState<any[]>([]);
  const [nextUrl, setNexUrl] = React.useState<string | null>();

  const [page, setPage] = React.useState('1');

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
      {loading && <Fallback />}
      {nextUrl && <Button onClick={handleClick}>Show more</Button>}
    </SectionLayout>
  );
};
