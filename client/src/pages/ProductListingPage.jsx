import React, { useState } from 'react';
import HeroImage from '../assets/Landing Images/Shop All Hero Banner.png';
import { H3 } from '../components/typography/headings';
import Filter from '../components/ui/Filter';
import BestSeller1 from '../assets/Landing Images/BestSeller1.png';
import BestSeller2 from '../assets/Landing Images/BestSeller2.png';
import BestSeller3 from '../assets/Landing Images/BestSeller3.png';
import Card from '../components/ui/Card';
import Filters from '../components/ui/Filters';

export default function ProductListingPage() {
  const cardDetails = [
    {
      src: BestSeller1,
      title: 'Tailored Stretch',
      subtitle: 'Turn It Up Pants',
      price: '$180',
      colors: ['#000000', '#748c70', '#6B7F5E'],
      chips: false,
    },
    {
      src: BestSeller2,
      title: 'Technical Silk',
      subtitle: 'Make A Splash',
      price: '$120',
      colors: ['#909225', '#19418E', '#000000'],
      chips: false,
    },
    {
      src: BestSeller3,
      title: 'Cool Weave',
      subtitle: 'Anywhere Dress',
      price: '$210',
      colors: ['#D0A5EA', '#909225', '#748c70'],
      chips: false,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full h-full">
        <img src={HeroImage} alt="" />
      </div>
      <div className="flex px-20 justify-between">
        <Filters />
        <div className="grid grid-cols-2 gap-5">
          {cardDetails.map((detail, index) => {
            return <Card key={index} details={detail} />;
          })}
          {cardDetails.map((detail, index) => {
            return <Card key={index} details={detail} />;
          })}
        </div>
      </div>
    </div>
  );
}
