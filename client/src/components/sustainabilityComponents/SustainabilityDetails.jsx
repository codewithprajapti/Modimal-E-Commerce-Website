import React from 'react';
import { H3, H4, H5 } from '../typography/headings';
import { BLG, BXL } from '../typography/body';

export default function SustainabilityDetails() {
  const missions = [
    {
      title: 'Minimalism',
      detail:
        'we believe less is more. Our thoughtfully design pieces embrace minimalism ensuring that garment becomes a versatile and timeless addition to your wardrobe. by choosing quality over quantity, we encourage conscious consumption. ',
    },
    {
      title: 'Circular',
      detail:
        "Embracing the circular economy, we design with longevity in mind. Our pieces are intended to be treasured for years, encouraging a shift away from disposable fashion. When you invest in our clothing, you're investing in a more sustainable future.",
    },
    {
      title: 'Ethical',
      detail:
        'Every stitch tells a story. Our garments are meticulously crafted by skilled artisans who share our values of ethical and fair labor practices. This dedication to craftsmanship not only ensures exceptional quality but also supports a network of talented individuals.',
    },
    {
      title: 'Transparency',
      detail:
        "We value openness and transparency. We're on a journey to continuously improve our practices, and we're committed to sharing our progress with you. From sourcing to production, we want you to know the story behind each piece you wear. we are updating all  information very six months.",
    },
    {
      title: 'Eco - Freindly Materials',
      detail:
        'We are dedicated to reducing our environmental impact. Our clothing is made using sustainable materials, carefully sourced to minimize harm to the planet. From organic fabrics to innovative recycled materials, we aim to leave a lighter footprint.',
    },
    {
      title: 'Community And Empowerment',
      detail:
        'Our brand is a part of a community that shares a vision for a better world. Through collaborations and initiatives, we aim to inspire and empower individuals to make conscious choices and contribute to positive change.',
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <H3> Sustainability At Modimal </H3>
        <BXL>
          At Modimal, sustainability is at the heart of everything we do. Our
          brand identity, characterized by its simplicity and elegance, is a
          reflection of our commitment to a more sustainable future.
        </BXL>
      </div>
      <div className="flex flex-col gap-5">
        <H4> Our Mission, The Modimal six: </H4>
        <div className="grid grid-cols-2 justify-between gap-5">
          {missions.map((mission, index) => {
            return (
              <div key={index} className="flex flex-col gap-3">
                <H5> {mission.title} </H5>
                <BLG> {mission.detail} </BLG>
              </div>
            );
          })}
        </div>
        <BXL>
          Guided by our core missions, we intertwine sustainability into every
          thread of our brand, from thoughtfully sourced materials and
          innovative manufacturing process to nurturing product longevity and
          embracing eco-friendly packaging – all harmonizing to create a more
          meaningful and responsible approach to fashion.
        </BXL>
      </div>
    </div>
  );
}
