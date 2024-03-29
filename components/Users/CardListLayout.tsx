import styles from '@/lib/styles/users.module.scss';
import React from 'react';
import { Card } from './Card';

import { useUsers } from '@/lib/hooks/useGetHook';

import dynamic from 'next/dynamic';
const DynamicFallback = dynamic(() => import('../design/Fallback'));

type CardListLayout = {
  index: number;
};

const CardListLayout = (props: CardListLayout) => {
  const { index } = props;
  const { data, isLoading } = useUsers(index);
  const users = data?.users;

  return (
    <>
      <div className={styles.root}>
        {!!users &&
          users.map((user: UserCard, index: number) => (
            <article key={index}>
              <Card
                name={user.name}
                phone={user.phone}
                photo={user.photo}
                email={user.email}
                position={user.position}
              />
            </article>
          ))}
      </div>
      {isLoading && <DynamicFallback />}
    </>
  );
};

export default React.memo(CardListLayout);
