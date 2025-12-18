import React from 'react';
import Card from '../ui/Card';
import BestSeller1 from '../../assets/Landing Images/BestSeller1.png';
import BestSeller2 from '../../assets/Landing Images/BestSeller2.png';
import BestSeller3 from '../../assets/Landing Images/BestSeller3.png';
import { H3 } from '../typography/headings';
import { ButtonSM } from '../typography/buttons';

export default function BestSellers() {
  const details = [
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
    <div flex flex-col>
      <div className="flex justify-between items-center mb-5">
        <H3 className={'text-black'}> Best Sellers </H3>
        <ButtonSM> Viwe All </ButtonSM>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {details.map((detail, index) => {
          return <Card key={index} details={detail} />;
        })}
      </div>
    </div>
  );
}
