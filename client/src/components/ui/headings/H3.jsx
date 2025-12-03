import React from 'react';

export default function H3({ className, children, ...props }) {
  return (
    <h3
      className={cn('text-[32px] font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </h3>
  );
}


