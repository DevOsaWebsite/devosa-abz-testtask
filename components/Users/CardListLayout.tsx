'use client';
import styles from '@/lib/styles/users.module.scss';
import React, { Suspense } from 'react';
import { Card } from './Card';
import { getUsers } from '@/lib/users';
import { Fallback } from '../design/Fallback';

type CardListLayout = {
  users: never[];
};

export const CardListLayout = ({ users }: { users: any[] | false }) => {
  return (
    <>
      <div className={styles.root}>
        {!!users &&
          users.map((user: UserCard) => (
            <article key={user.id}>
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
    </>
  );
};
