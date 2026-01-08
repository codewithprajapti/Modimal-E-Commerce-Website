import React, { Activity, useEffect, useState } from 'react';
import Filter from './Filter';
import { H3 } from '../typography/headings';
import LargeChips from '../typography/chips/LargeChips';
import { X } from 'lucide-react';
import { ButtonSM } from '../typography/buttons';

export default function Filters() {
  const filterData = [
    {
      name: 'Sort By',
      filters: [
        'Featured',
        'Best Seller',
        'Price: Low To Hight',
        'Price: Hight To Low',
      ],
    },
    {
      name: 'Size',
      filters: [
        'XS / US (0-4)',
        'S / US (4-6)',
        'M / US (6-10)',
        'L / US (10-14)',
        'XL / US (12-16)',
      ],
    },
    { name: 'Collection', filters: ['In stock', 'Out of stock'] },
    {
      name: 'Fabric',
      filters: ['Cotton', 'Linen', 'Wool', 'Silk', 'Cashmere'],
    },
    {
      name: 'Color',
      filters: [
        'Black',
        'Red',
        'Green',
        'Yellow',
        'Dark Blue',
        'Purple',
        'Pink',
        'Light Blue',
        'Orange',
        'White',
      ],
      colors: [
        '#0c0c0c',
        '#CA2929',
        '#748c70',
        '#909225',
        '#19418E',
        '#D0A5EA',
        '#CA2980',
        '#7DC3EB',
        '#CA6D29',
        '#FFFFFF',
      ],
    },
  ];
  const [openIndexes, setOpenIndexes] = useState([]);
  const [selected, setSelected] = useState([]);

  const toggleFilter = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const addSelected = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelected([]);
  };
  useEffect(() => {}, [selected]);
  return (
    <div className="flex flex-col gap-5">
      <H3> Filters </H3>
      <Activity mode={selected == '' ? 'hidden' : 'visible'}>
        <div className="flex flex-col gap-3">
          {selected.map((select, index) => {
            console.log(select);
            return (
              <LargeChips
                key={index}
                lbel={select}
                className={'bg-primary-50'}
                icon={
                  <X
                    onClick={() => addSelected(select)}
                    className="cursor-pointer"
                  />
                }
              />
            );
          })}
          <div className="flex justify-between">
            <ButtonSM
              className={
                'text-primary-600 hover:text-gray-606060 active:text-gray-404040'
              }
              onClick={clearFilters}
            >
              Clear All Filters
            </ButtonSM>
            <ButtonSM
              className={
                'bg-primary-600 hover:bg-primary-700 active:bg-primary-750 px-4 text-white cursor-auto'
              }
            >
              Applied Filters
            </ButtonSM>
          </div>
        </div>
      </Activity>

      {filterData.map((data, index) => {
        return (
          <Filter
            key={index}
            data={data}
            open={openIndexes.includes(index)}
            onToggle={() => toggleFilter(index)}
            addSelected={addSelected}
            selected={selected}
          />
        );
      })}
    </div>
  );
}
