import React from 'react';
import { H4 } from '../typography/headings';
import Image from '../../assets/Sustainability Images/People Behind Us.png';
import { ButtonLG } from '../typography/buttons';
import { BXL } from '../typography/body';

export default function PeopleBehindUs() {
  return (
    <div className="flex flex-col gap-5">
      <H4> People Beyond Us </H4>
      <img src={Image} alt="" />
      <div className="self-center">
        <ButtonLG className="bg-primary-600 text-white w-full hover:bg-primary-700 active::bg-primary-750 px-32   py-2">
          Our Suppliers
        </ButtonLG>
      </div>
      <BXL>
        With Modimal, you're not just wearing fashion – you're making a
        statement. A statement that elegance and sustainability can coexist,
        shaping a more responsible and beautiful future for us all.
      </BXL>
    </div>
  );
}
