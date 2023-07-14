import React from 'react';

import { Hero } from '@/components/Hero';
import { AllUsers } from '@/components/AllUsers';
import { AddUser } from '@/components/AddUser';
import { SWRProvider } from '@/components/utils/Providers/SWRProvider';

const api_url = process.env.API_URL;
const path = process.env.API_PATH_USERS;
const fetchURL = api_url + path + `?page=1&count=6`;

async function getUsers() {
  const res = await fetch(fetchURL, { method: 'GET' });
  const data = await res.json();

  return data;
}

export default async function HomePage() {
  const users = await getUsers();


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
