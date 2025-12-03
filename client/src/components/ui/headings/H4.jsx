import React from 'react';

export default function H4({ className, children, ...props }) {
  return (
    <h4
      className={cn('text-[24px] font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </h4>
  );
}


