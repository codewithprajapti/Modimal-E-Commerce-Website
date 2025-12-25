import React from 'react';
import { H2 } from '../components/typography/headings';
import '../index.css';
import SustainabilityDetails from '../components/sustainabilityComponents/SustainabilityDetails';
import SustainabilityImageButton from '../components/sustainabilityComponents/SustainabilityImageButton';
import PeopleBehindUs from '../components/sustainabilityComponents/PeopleBehindUs';

export default function SustainabilityMission() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-end items-center sustainabilty_hero ">
        <div className="pb-20">
          <H2 className="text-white">
            Elegance in simplicity, Earth’s harmony
          </H2>
        </div>
      </div>
      <div className="flex flex-col gap-10 px-20">
        <SustainabilityDetails />
        <SustainabilityImageButton />
        <PeopleBehindUs />
      </div>
    </div>
  );
}
