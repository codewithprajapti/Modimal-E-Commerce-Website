import React from 'react';
import BreadCrumb from '../components/ui/BreadCrumb';
import { H3, H4, H5, H6 } from '../components/typography/headings';
import { BMD, BSM, BXS } from '../components/typography/body';
import { ButtonSM } from '../components/typography/buttons';
import Input from '../components/ui/Input';
import { Mail, MessageSquareText, Contact } from 'lucide-react';

export default function ContactUs() {
  const inputClasses =
    'border-t-0 border-l-0 border-r-0 focus:border hover:border';
  const breadcrumblinks = [{ name: 'Contact Us', url: '/contact-us' }];
  const footerCard = [
    {
      icon: <MessageSquareText />,
      title: 'Chat With Us',
      description: 'We Are Here And Ready To Chat',
      cta: 'Start Chat',
    },
    {
      icon: <Contact />,
      title: 'Call Us',
      description: "We're Here To Talk You",
      cta: '+1(929)460-3208',
    },
    {
      icon: <Mail />,
      title: 'Email Us',
      description: 'You Are Welcome To Send Us An Email',
      cta: 'Send Email',
    },
  ];
  return (
    <div className="flex flex-col">
      <BreadCrumb links={breadcrumblinks} />
      <div className="border-0 px-23 flex flex-col gap-5 mt-5">
        <H3>Contact Us</H3>

        <BMD className="flex flex-col gap-7 bg-primary-25 text-black px-5 py-5">
          <span>
            We always love hearing from our customers! Please do not hesitate to
            contact us should you have any questions regarding our products and
            sizing recommendations or inquiries about your current order.
          </span>
          <span>
            Contact our Customer Care team through the contact form below, email
            us at hello@modimal.com or live chat with us via our chat widget on
            the bottom right hand corner of this page.
          </span>
          <span>We will aim to respond to you within 1-2 business days.</span>
        </BMD>

        <div className="px-17 flex flex-col gap-5 ">
          <H4 className="flex gap-3 items-center text-black">
            <Mail /> Write Us
          </H4>

          <H5>Your Information</H5>
          <div className="flex flex-col gap-5">
            <Input label={'Full Name'} type="text" className={inputClasses} />
            <Input label={'Email'} type="email" className={inputClasses} />
            <Input label={'Subject'} type="text" className={inputClasses} />
            <Input
              label={'Order Number'}
              type="text"
              className={inputClasses}
            />
            <Input label={'Message'} type="text" className={inputClasses} />

            <div className={'flex gap-5 items-center'}>
              <input
                type="checkbox"
                className={
                  'h-5 cursor-pointer px-0 py-0 w-5 border border-gray-606060 text-gray-606060 rounded-0 outline-none hover:border-gray-404040 focus:border-primary-400 transition-all duration-200'
                }
              />
              <BSM className={'text-black'}>
                I have read and understood the contact us privacy and policy.
              </BSM>
            </div>
            <ButtonSM
              className={
                'self-end bg-primary-600 text-white px-25 hover:bg-primary-700 active:bg-primary-750 disabled:bg-gray-cbcbcb'
              }
            >
              Send
            </ButtonSM>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {footerCard.map((card, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-4 py-4 gap-4  bg-primary-25 "
              >
                {card.icon}

                <H6> {card.title} </H6>
                <BXS> {card.description} </BXS>
                <ButtonSM
                  className={
                    'border w-full border-primary-600 text-primary-600 hover:border-primary-700 hover:text-primary-700 active:border-primary-750 active:text-primary-750'
                  }
                >
                  {card.cta}
                </ButtonSM>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
