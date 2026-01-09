import React, { Activity, useState } from 'react';
import { H6 } from '../typography/headings';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Checkbox from './Checkbox';
import { BSM } from '../typography/body';

export default function SizeDropDown() {
  const [open, setOpen] = useState(false);
  const sizes = [
    'XS / US (0-4)',
    'S / US (4-6)',
    'M/ US (6-10)',
    'L / US (10-14)',
    'XL / US (12-16)',
  ];
  return (
    <div className="flex flex-col border border-gray-dfdfdf gap-2">
      <div
        className={`flex justify-between items-center cursor-pointer ${open ? '' : 'border-b border-gray-dfdfdf'} px-4 py-2`}
        onClick={() => setOpen((prevopen) => !prevopen)}
      >
        <H6> Size </H6>
        {!open ? <ChevronUp /> : <ChevronDown />}
      </div>

      <Activity mode={open ? 'hidden' : 'visible'}>
        <div className="flex flex-col">
          {sizes.map((size, index) => {
            const isLastElement = index === sizes.length - 1;
            const fistElemetnt = index === 0
            return (
              <div
                key={index}
                className={`flex gap-3 border-b border-gray-dfdfdf px-4 py-2  items-center ${isLastElement ? 'border-b-0' : ''} ${fistElemetnt ? 'py-0 pb-2' :''}`}
              >
                <Checkbox boxClassName={'border-gray-dfdfdf border'} />
                <BSM> {size} </BSM>
              </div>
            );
          })}
        </div>
      </Activity>
    </div>
  );
}
