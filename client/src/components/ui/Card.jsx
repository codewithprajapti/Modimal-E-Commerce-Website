import { Heart } from 'lucide-react';
import { Activity, useEffect, useState } from 'react';
import { BSM } from '../typography/body';
import { SmallChips } from '../typography/chips';

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
      <div className="relative overflow-hidden bg-[#E8C8A8]">
        {/* New Badge */}
        <Activity mode={details.chips ? 'visible' : 'hidden'}>
          {/* <span className="absolute top-3 left-3 bg-white text-sm px-3 py-1">
            New
          </span> */}
          <SmallChips className='absolute top-3 left-3' lbel='New'/>
        </Activity>

        {/* Wishlist Icon */}
        <button className="absolute top-3 right-3">
          <Heart className='cursor-pointer' fill="white" stroke="black" />
        </button>

        {/* Product Image */}
        <img
          src={details.src}
          alt={details.title}
          className="w-full h-full object-center  object-cover"
        />

        {/* CTA Overlay */}
        <Activity mode={hover ? 'visible' : 'hidden'}>
          <BSM className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] cursor-pointer">
            Next
          </BSM>
        </Activity>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className="font-semibold text-lg">{details.title}</h3>

        <div className="flex items-center justify-between">
          <p className="text-gray-600">{details.subtitle}</p>
          <span className="font-semibold">{details.price}</span>
        </div>

        {/* Color Options */}
        <div className="flex gap-2 pt-1">
          {details.colors.map((color, index) => (
            <span
              key={index}
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
