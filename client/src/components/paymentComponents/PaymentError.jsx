import React from 'react';
import { ShieldAlert, ChevronLeft } from 'lucide-react';
import { H2 } from '../typography/headings';
import { BXL } from '../typography/body';
import { ButtonSM } from '../typography/buttons';

export default function PaymentError() {
  return (
    <div className="flex flex-col items-center gap-5 py-20">
      <ShieldAlert size={65} className="text-error" />
      <H2 className="text-error"> Sorry, Payment Failed </H2>
      <div className="flex flex-col gap-2 items-center text-black">
        <BXL> Unfortunately, your order Cannot Be Completed. </BXL>
        <BXL>
          Please ensure that the billing address you provided is the same one
          where your debit/credit card is registered.
        </BXL>
        <BXL> Alternatively, please try a different payment method. </BXL>
      </div>
      <ButtonSM className="bg-primary-600 text-white hover:bg-primary-700 active::bg-primary-750 px-28 py-3"> Pay Now </ButtonSM>
      <ButtonSM className='flex text-primary-600 hover:text-primary-700 active:text-primary-750 items-center'> <ChevronLeft size={24}/> Back to My Orders </ButtonSM>
    </div>
  );
}
