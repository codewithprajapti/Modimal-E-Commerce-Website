import React from 'react';
import Hero from '../components/ui/Hero';
import BestSellers from '../components/homeComponents/BestSellers';
import Collection from '../components/homeComponents/Collection';
import Sustainabilty from '../components/homeComponents/Sustainabilty';
import FollowUs from '../components/homeComponents/FollowUs';

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Hero />
      <div className="flex flex-col gap-15 px-20">
        <BestSellers />
        <Collection />
      </div>
      <Sustainabilty />
      <div className="px-20">
        <FollowUs />
      </div>
    </div>
  );
}
