import React from 'react';
import { H3, H4 } from '../components/typography/headings';
import { BLG, BXL } from '../components/typography/body';
import Cotten from '../assets/Sustainability Matirial Images/Cotton.png';
import Wool from '../assets/Sustainability Matirial Images/Wool.png';
import Linen from '../assets/Sustainability Matirial Images/Linen.png';
import Silk from '../assets/Sustainability Matirial Images/Silk.png';
import Cashmere from '../assets/Sustainability Matirial Images/Cashmere.png';
export default function SustainabilityMaterial() {
  const matirials = [
    {
      id: 1,
      uri: Cotten,
      title: 'Cotten',
      details: (
        <BLG className="flex flex-col gap-2">
          We source certified organic cotton, which is grown without the use of
          pesticides or synthetic fertilizers and requires less irrigation as it
          relies mainly on rainwater.
          <span>
            (1). Avoiding harmful pesticides preserves soil biodiversity and
            protects the health of surrounding communities.
          </span>
          <span>
            (2). Our organic cotton fabrics are made using organic cotton yarns
            that are certified by the Global Organic Textile Standard (GOTS)
          </span>
        </BLG>
      ),
    },
    {
      id: 2,
      uri: Wool,
      title: 'Wool',
      details: (
        <BLG className="flex flex-col gap-2">
          Wool is a natural fiber with added performance attributes such as
          temperature regulation, durability, and natural water repellency.
          Considered a circular product by nature, wool can be recycled or
          biodegraded easily. Animal welfare is extremely important to us, and
          therefore we only source mulesing-free wool from producers that follow
          humane and eco-friendly processes aligned with our animal welfare
          guidelines.
        </BLG>
      ),
    },
    {
      id: 3,
      uri: Linen,
      title: 'Linen',
      details: (
        <BLG className="flex flex-col gap-2">
          Found throughout our collections, linen is a sustainable fiber made
          from the flax plant. Flax is naturally pest resistant that requires
          less pesticides, water and energy to produce compared to cotton and
          polyester. Flax aids in sequestering carbon into the soil, which
          removes carbon dioxide from the atmosphere and is beneficial for
          improving soil health.
        </BLG>
      ),
    },
    {
      id: 4,
      uri: Silk,
      title: 'Silk',
      details: (
        <BLG className="flex flex-col gap-2">
          Organic silk is a more responsible alternative to making conventional
          silk through traditional methods. The silkworms are fed mulberry tree
          leaves from organic agriculture that uses no pesticides or harmful
          chemicals and resulting in a lustrous fabric that is gentle on both
          you and environment. this responsibly sourced material epitomizes our
          dedication to creating exquisite clothing with a conscience.
        </BLG>
      ),
    },
    {
      id: 5,
      uri: Cashmere,
      title: 'Cashmere',
      details: (
        <BLG className="flex flex-col gap-2">
          We’re proud to source our cashmere through the Good Cashmere Standard
          by the Aid by Trade Foundation (AbTF). This independent standard works
          to source traceable, sustainably certified cashmere that cares for the
          wellbeing of cashmere goats, protects the environment and supports the
          herders that produce it.
        </BLG>
      ),
    },
  ];
  return (
    <div className="flex flex-col px-20 gap-20">
      <div className="flex flex-col gap-5">
        <H3> Sustainably sourced materials </H3>
        <BXL className="flex flex-col gap-2">
          At Modimal, we believe in investing in the now to design for the
          future. That’s why we are committed to sourcing quality materials that
          will have less impact on the environment.
          <span>
            So far in 2022, 92% of the base fabrics in our collection are more
            sustainably sourced. Our goal is To use only 100% sustainably
            sourced materials by 2025.
          </span>
          <span>
            There are five kinds of fabrics in our collections that are Organic
            and responsible sourced, and we highlight these so you can make
            considered choices when you shop.
          </span>
        </BXL>
      </div>
      <div className="flex flex-col gap-15">
        {matirials.map((item, index) => {
          return (
            <div key={index} className="flex gap-15 items-center">
              <div
                className={`flex w-full h-fit ${item.id % 2 == 0 ? 'order-2' : 'order-1'}`}
              >
                <img
                  src={item.uri}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              <div
                className={`flex flex-col gap-5 ${item.id % 2 == 0 ? 'order-1' : 'order-2'}`}
              >
                <H4> {item.title} </H4>
                {item.details}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-5">
        <BXL>
          we are continually exploring more sustainable alternatives that offer
          the same quality and performance. we will soon add new fabrics in to
          our collections which are recycling and repurposing. By giving a new
          life to leftover fabrics through recycling and repurposing, we can
          reduce our demand on the planet’s limited natural resources. Recycled
          fabrics are made using the waste from both the pre- and post-consumer
          stage of a product’s life.
        </BXL>
        <BXL>
          We track our material usage and progress annually as part of Textile
          Exchange’s Corporate Fibers and Materials Benchmark, view our latest
          report here.
        </BXL>
      </div>
    </div>
  );
}
