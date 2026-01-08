import React from 'react';
import { H3 } from '../typography/headings';
import { BLG } from '../typography/body';
import { ButtonSM } from '../typography/buttons';

export default function ProductTitle() {
  const colors = ['#8218a1', '#000000'];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <H3 className={'text-black'}> Wrap Top </H3>
        <BLG>
          Versatile and universally flattering, our wrap boluse can be tied,
          draped, snapped and wrapped multiple ways.
        </BLG>
      </div>
      <div className="flex flex-col gap-3">
        <ButtonSM className={'px-0 py-0 cursor-auto w-0'}> Colors </ButtonSM>
        <div className="flex gap-3">
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                className="rounded-full w-5  h-5 "
                style={{ backgroundColor: color, border: color }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
