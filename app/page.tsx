import React from 'react';

import { Hero } from '@/components/Hero';
import { AllUsers } from '@/components/AllUsers';
import { AddUser } from '@/components/AddUser';
import { SWRProvider } from '@/components/utils/Providers/SWRProvider';
import getPrefetchUsers from './api/users/(utils)/get-prefecth-users';

export default async function HomePage() {
  const users = await getPrefetchUsers();

  return (
    <>
      <Hero />
      <SWRProvider users={users}>
        <AllUsers />
      </SWRProvider>
      <AddUser />
    </>
  );
}
