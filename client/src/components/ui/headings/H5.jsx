import React from 'react';

export default function H5({ className, children, ...props }) {
  return (
    <h5
      className={cn('text-[20px] font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </h5>
  );
}


