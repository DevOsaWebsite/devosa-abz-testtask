import styles from '@/lib/styles/users.module.scss';
import React from 'react';
import { Card } from './Card';

type CardListLayout = {
  users: never[];
};

export const CardListLayout = ({ users }: { users: any[] | false }) => {
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
    </>
  );
};
