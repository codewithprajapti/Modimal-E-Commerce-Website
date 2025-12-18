import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export default function Checkbox({
  className,
  boxClassName,
  disabled,
  checked,
  onChange,
  isDarkMOde,
  ...props
}) {
  return (
    <label
      className={cn(
        `inline-flex  ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
        className
      )}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span
        className={cn(
          `h-4 w-4 border-2 bg-white peer-hover:bg-primary-400 peer-checked:bg-primary-600 peer-disabled:bg-gray-cbcbcb peer-disabled:border-gray-cbcbcb transition-all duration-200 peer-focus:ring-0 ${isDarkMOde ? 'border-primary-200' : 'border-white'} `,
          boxClassName
        )}
      />
    </label>
  );
}
