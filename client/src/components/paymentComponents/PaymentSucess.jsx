import React from 'react';
import { CircleCheck } from 'lucide-react';
import { H2 } from '../typography/headings';
import { BLG, BSM, BXL } from '../typography/body';
import { ButtonSM } from '../typography/buttons';

export default function PaymentSucess() {
  return (
    <div className="flex flex-col items-center gap-5 py-20">
      <CircleCheck size={65} className="text-success" />
      <H2 className="text-success"> Payment Successful </H2>
      <BXL className="text-balance">
        Thank you for choosing Modimal, Your order will be generated based on
        your delivery request.
      </BXL>
      <BXL className="text-black">The Receipt has been sent to your email.</BXL>
      <div className="flex flex-col gap-3">
        <BLG className="text-gray-404040">Please Contact Us For Any Query</BLG>
        <ButtonSM className="text-black cursor-auto px-0 py-0 mt-2">
          +1(929)460-3208
        </ButtonSM>
        <ButtonSM className="text-black cursor-auto px-0 py-0"> OR </ButtonSM>
        <ButtonSM className="text-black cursor-auto px-0 py-0">
          Hello @ modimal.com
        </ButtonSM>
      </div>
    </div>
  );
}
