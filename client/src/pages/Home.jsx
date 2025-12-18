import React from 'react';
import Hero from '../components/ui/Hero';
import BestSellers from '../components/homeComponents/BestSellers';
import Collection from '../components/homeComponents/Collection';

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Hero />
      <div className="flex flex-col gap-5 px-20">
        <BestSellers />
        <Collection />
      </div>
    </div>
  );
}
