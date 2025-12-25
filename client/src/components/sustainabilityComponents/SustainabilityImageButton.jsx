import React from 'react';
import ModimicSix1 from '../../assets/Sustainability Images/Modimic Six 1.png';
import ModimicSix2 from '../../assets/Sustainability Images/Modimic Six 2.png';
import ModimicSix3 from '../../assets/Sustainability Images/Modimic Six 3.png';
import ModimicSix4 from '../../assets/Sustainability Images/Modimic Six 4.png';
import { ButtonLG } from '../typography/buttons';
import { BXL } from '../typography/body';

export default function SustainabilityImageButton() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 items-center justify-center">
          <img src={ModimicSix1} alt="" />
          <ButtonLG className="bg-primary-600 text-white w-full hover:bg-primary-700 active::bg-primary-750">
            Processing
          </ButtonLG>
        </div>
        <div className="flex flex-col gap-3">
          <img src={ModimicSix3} alt="" />
          <ButtonLG className="bg-primary-600 text-white w-full hover:bg-primary-700 active::bg-primary-750">
            Materials
          </ButtonLG>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 items-center justify-center">
          <img src={ModimicSix2} alt="" />
          <ButtonLG className="bg-primary-600 text-white w-full hover:bg-primary-700 active::bg-primary-750">
            Packaging
          </ButtonLG>
        </div>
        <div className="flex flex-col gap-3 self-center">
          <img src={ModimicSix4} alt="" />
          <ButtonLG className="bg-primary-600 text-white w-full hover:bg-primary-700 active::bg-primary-750">
            Product Caring
          </ButtonLG>
        </div>
      </div>

      <BXL>
        "With every step, our quest for sustainability is fortified by our
        trusted suppliers, united in our shared dedication to ethical
        craftsmanship and a more conscious future."
      </BXL>
    </div>
  );
}
