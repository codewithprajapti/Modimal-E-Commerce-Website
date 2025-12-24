import React from 'react';
import Collection1 from '../../assets/Landing Images/Collection1.png';
import Collection2 from '../../assets/Landing Images/Collection2.png';
import Collection3 from '../../assets/Landing Images/Collection3.png';
import Collection4 from '../../assets/Landing Images/Collection4.png';
import { ButtonSM } from '../typography/buttons';
import { H3 } from '../typography/headings';

export default function Collection() {
  return (
    <div className="flex flex-col gap-5">
      <H3 className={'text-black'}>Collection</H3>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-20">
          <div className="relative overflow-hidden">
            <img
              src={Collection1}
              alt="Collection1"
              className="w-full h-full object-center  object-cover"
            />
            <ButtonSM
              className={
                'absolute bottom-3 right-3 px-8  cursor-pointer text-black bg-white'
              }
            >
              Boluses
            </ButtonSM>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={Collection2}
              alt="Collection1"
              className="w-full h-full object-center  object-cover"
            />
            <ButtonSM
              className={
                'absolute bottom-3 right-3 px-8  cursor-pointer text-black bg-white'
              }
            >
              Dresses
            </ButtonSM>
          </div>
        </div>
        <div className="flex flex-col gap-40">
          <div className="relative overflow-hidden">
            <img
              src={Collection3}
              alt="Collection1"
              className="w-full h-full object-center  object-cover"
            />
            <ButtonSM
              className={
                'absolute bottom-3 left-3 px-8  cursor-pointer text-black bg-white'
              }
            >
              Pants
            </ButtonSM>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={Collection4}
              alt="Collection1"
              className="w-full h-full object-center  object-cover"
            />
            <ButtonSM
              className={
                'absolute bottom-3 right-3 px-8  cursor-pointer text-black bg-white'
              }
            >
              Outwear
            </ButtonSM>
          </div>
        </div>
      </div>
    </div>
  );
}
