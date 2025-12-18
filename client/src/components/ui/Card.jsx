import { Heart } from 'lucide-react';
import { Activity, useEffect, useState } from 'react';
import { ButtonSM } from '../typography/buttons';
import { SmallChips } from '../typography/chips';
import { H6 } from '../typography/headings';
import { BMD } from '../typography/body';

export default function Card({ details }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full max-w-sm"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {/* New Badge */}
        <Activity mode={details.chips ? 'visible' : 'hidden'}>
          <SmallChips className="absolute top-3 left-3" lbel="New" />
        </Activity>

        {/* Wishlist Icon */}
        <button className="absolute top-3 right-3">
          <Heart className="cursor-pointer" fill="white" stroke="black" />
        </button>

        {/* Product Image */}
        <img
          src={details.src}
          alt={details.title}
          className="w-full h-full object-center  object-cover"
        />

        {/* CTA Overlay */}
        <Activity mode={hover ? 'visible' : 'hidden'}>
          <ButtonSM
            className={
              'absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer bg-primary-600 text-white w-[90%]'
            }
          >
            Next
          </ButtonSM>
        </Activity>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <H6 className="text-black">{details.title}</H6>

        <div className="flex items-center justify-between">
          <BMD className="text-black">{details.subtitle}</BMD>
          <H6 className="text-black">{details.price}</H6>
        </div>

        {/* Color Options */}
        <div className="flex gap-2 pt-1">
          {details.colors.map((color, index) => (
            <span
              key={index}
              className="w-6 h-6 rounded-full border cursor-pointer"
              style={{ backgroundColor: color, border: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
