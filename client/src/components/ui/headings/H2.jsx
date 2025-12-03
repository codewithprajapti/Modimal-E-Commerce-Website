import React from 'react';

export default function H2({ className, children, ...props }) {
  return (
    <h2
      className={cn('text-[40px] font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </h2>
  );
}


