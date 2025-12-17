import React from 'react';

export default function LargeChips({ className, lbel, ...props }) {
  return (
    <span className={cn('bg-white px-8 py-3 ', className)} {...props}>
      <BSM> {lbel} </BSM>
    </span>
  );
}
