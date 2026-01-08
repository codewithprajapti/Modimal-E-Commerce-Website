import React, { Activity } from 'react';
import { H6 } from '../typography/headings';
import { Plus, Minus } from 'lucide-react';
import Checkbox from './Checkbox';
import { BMD } from '../typography/body';

export default function Filter({ data, open, onToggle, addSelected, selected }) {
  const colors = data.colors;

  return (
    <div
      className={`flex flex-col gap-5 ${open ? 'border border-primary-200' : ''}`}
    >
      <div
        className={`flex justify-between w-3xs px-4 py-2 items-center
         cursor-pointer ${open ? 'text-primary-500' : 'bg-primary-500 text-white'}`}
        onClick={onToggle}
      >
        <H6>{data.name}</H6>
        {open ? <Minus /> : <Plus />}
      </div>

      <Activity mode={open ? 'visible' : 'hidden'}>
        <div className="flex flex-col gap-3 px-4 pb-4">
          {data.filters.map((filter, index) => (
            <div key={index} className="flex gap-4 items-center">
              <Checkbox
                boxClassName="w-5 h-5 border-primary-200"
                onClick={() => addSelected(filter)}
                checked={selected.includes(filter)}
              />

              {colors && colors[index] && (
                <div
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: colors[index] }}
                />
              )}
              <BMD>{filter}</BMD>
            </div>
          ))}
        </div>
      </Activity>
    </div>
  );
}
