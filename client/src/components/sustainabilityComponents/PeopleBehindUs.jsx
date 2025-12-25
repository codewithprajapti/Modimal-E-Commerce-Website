import React from 'react';
import { H4 } from '../typography/headings';
import Image from '../../assets/Sustainability Images/People Behind Us.png';
import { ButtonLG } from '../typography/buttons';

export default function PeopleBehindUs() {
  return (
    <div className="flex flex-col">
      <H4> People Beyond Us </H4>
      <img src={Image} alt="" />
      <div className='self-center'>
        <ButtonLG className="bg-primary-600 text-white">Our Suppliers</ButtonLG>
      </div>
    </div>
  );
}
