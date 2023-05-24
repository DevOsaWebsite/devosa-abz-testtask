import React from 'react';

import { Hero } from '@/components/Hero';
import { CardsSection } from '@/components/Users/CardsSection';

import { getPositions } from '@/lib/users';

export default async function Home() {

  return (
    <>
      <Hero />
      <CardsSection />
    </>
  );
}
