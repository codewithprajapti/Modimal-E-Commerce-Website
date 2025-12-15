import React, { Activity, useState } from 'react';
import { H5 } from '../typography/headings/index';
import { BMD } from '../typography/body/index';
import { Plus, Minus } from 'lucide-react';

export default function Accordian({faq}) {
  const [open, isOpen] = useState(false);
  return (
    <div className="flex flex-col border-b border-gray-cbcbcb py-2">
      <div
        className={`flex cursor-pointer ${open ? 'text-primary-500' : 'text-black'} justify-between`}
        onClick={() => {
          isOpen(prevopen => !prevopen);
        }}
      >
        <H5> {faq.question} </H5>
        {open ? <Minus /> : <Plus />}
      </div>
      <Activity mode={open ? "visible" : "hidden"}>
        <BMD className='mt-3 leading-7'>
          {faq.anwser}
        </BMD>
      </Activity>
    </div>
  );
}
