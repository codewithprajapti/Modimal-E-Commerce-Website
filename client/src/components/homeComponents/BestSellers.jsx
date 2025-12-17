import React from 'react';
import Card from '../ui/Card';
import Bloses from '../../assets/Navbar Dropdown Images/Blouses.png';

export default function BestSellers() {
  const details = {
    src : Bloses,
    title: 'Tailored Stretch',
    subtitle: 'Turn It Up Pants',
    price: '$180',
    colors: ['#000000', '#7DD3FC', '#6B7F5E'],
    chips : false
  };
  return (
    <div className='grid grid-cols-3 gap-5'>
      <Card details={details} />
      <Card details={details} />
      <Card details={details} />
    </div>
  );
}
