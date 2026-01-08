import React, { Activity, useState } from 'react';
import { H5 } from '../typography/headings/index';
import { BMD } from '../typography/body/index';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Accordian({ faq, className }) {
  const [open, isOpen] = useState(false);
  return (
    <div
      className={cn(
        'flex flex-col border-b border-gray-cbcbcb py-2',
        className
      )}
    >
      <div
        className={`flex cursor-pointer ${open ? 'text-primary-500' : 'text-black'} justify-between`}
        onClick={() => {
          isOpen((prevopen) => !prevopen);
        }}
      >
        <H5> {faq.question} </H5>
        {open ? <Minus /> : <Plus />}
      </div>
      <Activity mode={open ? 'visible' : 'hidden'}>
        <BMD className="mt-3 leading-7">{faq.anwser}</BMD>
      </Activity>
    </div>
  );
}
