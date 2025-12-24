import React from 'react';
import { BXL } from '../typography/body';
import '../../index.css';
import { ButtonSM } from '../typography/buttons';
export default function Sustainabilty() {
  return (
    <div className="sustainabilty_main flex flex-col justify-center gap-5">
      <BXL className="text-primary-800 mt-45 pt-25 w-1/2 px-5 self-end">
        Stylish sustainability in clothing promotes eco-friendly choices for a
        greater future
      </BXL>
      <div className="self-end w-1/2 flex justify-end px-30 ">
        <ButtonSM className="bg-white px-8"> Sustainability </ButtonSM>
      </div>
    </div>
  );
}
