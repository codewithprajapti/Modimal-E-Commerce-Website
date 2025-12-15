import { H5 } from '../typography/headings';
import { Icons } from '../../utils/FooterIcons';
import { ArrowRight } from 'lucide-react';
import { OSM } from '../typography/overlines';
import { BLG } from '../typography/body';
import { CMD } from '../typography/caption';
import { Link } from 'react-router-dom';
export default function Footer() {
  const footerLinks = [
    {
      title: 'About Modimal',
      links: [
        { name: 'Collection', url: '#' },
        { name: 'Sustainability', url: '#' },
        { name: 'Privacy Policy', url: '#' },
        { name: 'Support System', url: '#' },
        { name: 'Terms & Condition', url: '#' },
        { name: 'Copyright Notice', url: '#' },
      ],
    },
    {
      title: 'Help & Support',
      links: [
        { name: 'Orders & Shipping', url: '#' },
        { name: 'Returns & Refunds', url: '#' },
        { name: 'FAQs', url: 'faqs' },
        { name: 'Contact Us', url: 'contact-us' },
      ],
    },
    {
      title: 'Join Up',
      links: [
        { name: 'Modimal Club', url: '#' },
        { name: 'Careers', url: '#' },
        { name: 'Visit Us', url: '#' },
      ],
    },
  ];
  const social = [
    Icons.Instagram,
    Icons.Facebook,
    Icons.Pintrest,
    Icons.Tiktok,
  ];
  return (
    <div className="bg-gray-404040 w-full mt-5 px-20 py-15">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-2 flex flex-col gap-5">
          <H5 className="text-white">
            Join Our Club, Get 15% Off for Your Birthday{' '}
          </H5>

          <div className="flex border border-primary-50 px-2 py-2 items-center justify-between">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full outline-none text-primary-50"
            />
            <ArrowRight className="text-primary-50" />
          </div>

          <div className="flex items-center justify-between gap-2">
            <input type="checkbox" />
            <OSM className="text-white">
              By Submitting your email, you agree to recive advertising emails
              from Modimal.
            </OSM>
          </div>
        </div>
        {footerLinks.map((col, index) => {
          return (
            <div key={index}>
              <H5 className="text-white mb-5"> {col.title} </H5>

              <div className="flex flex-col gap-2">
                {col.links.map((link, index) => {
                  return (
                    <BLG key={index} className="text-white cursor-pointer">
                      <Link to={`/${link.url}`}>{link.name}</Link>
                    </BLG>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            {social.map((icon, index) => {
              return (
                <img
                  key={index}
                  src={icon}
                  alt={icon}
                  className="cursor-pointer"
                />
              );
            })}
          </div>
          <div className="flex gap-2 items-center">
            <img src={Icons.Copyright} alt="Copyright" />
            <CMD className={'text-gray-cbcbcb'}>
              2025 Modimal. All Rights Reserved.
            </CMD>
          </div>
        </div>
        <div className="border border-white px-3 py-3 bg-primary-600">
          <img src={Icons.Person} alt="" />
        </div>
      </div>
    </div>
  );
}
