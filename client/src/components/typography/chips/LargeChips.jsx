import React from 'react';
import { cn } from '../../../utils/cn';
import { BSM } from '../body';

export default function LargeChips({ className, lbel, icon,...props }) {
  return (
    <span className={cn('bg-white px-8 py-3 ', className)} {...props}>
      <BSM className={'flex justify-between'}> {lbel} {icon} </BSM>
    </span>
  );
}
