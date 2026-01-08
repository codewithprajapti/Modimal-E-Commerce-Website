import React from 'react';
import Accordian from './Accordian';

export default function ProductDescription() {
  const descriptions = [
    {
      question: 'Fitting',
      anwser: `Note: size up for a bigger fit.
            Studio model is 5’2”, usually wears a xs and wear a size here.`,
    },
    {
      question: 'Fabric & care ',
      anwser: `Fabric : 
Tailored Stretch, 
Made in Italy62% Nylon, 38% Elastane, 100% vegan materials
Care: 
Cold machine wash, line dry 
Do not tumble dry or dry clean, Do not use bleach or fabric softener`,
    },
    {
      question: 'Product Detail',
      anwser: `Manufactured in Portugal
Bonded details on neckline, hem and sleeves
Can be worn 5 different ways (Snapped, Wrapped, Tied, Loose, Waterfall)
Snap fastening at cuffs to adjust sleeve fit
Inverted box pleat at back`,
    },
    {
      question: 'Shipping And Return',
      anwser: `Shipping:
 is free on US , Canada orders are $175
Returns:
Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.`,
    },
  ];
  return (
    <div className="flex flex-col bg-primary-25 border border-gray-cbcbcb py-5 gap-5">
      {descriptions.map((description, index) => {
        const isLast = index === descriptions.length - 1;

        return (
          <Accordian
            key={index}
            faq={description}
            className={`px-5 ${isLast ? 'border-b-0' : ''}`}
          />
        );
      })}
    </div>
  );
}
