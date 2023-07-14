import React from 'react';

import { Hero } from '@/components/Hero';
import { AllUsers } from '@/components/AllUsers';
import { AddUser } from '@/components/AddUser';

export default function Home() {
  return (
    <>
      <Hero />
      <AllUsers />
      <AddUser />
    </>
  );
}
