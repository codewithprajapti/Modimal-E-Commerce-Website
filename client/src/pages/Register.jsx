import React from 'react';
import Image from '../assets/RegisterImage.png';
import { H3 } from '../components/typography/headings';
import { ButtonSM } from '../components/typography/buttons';
import { BSM } from '../components/typography/body';

export default function Register() {
  return (
    <div className="flex flex-wrap h-fit px-20 mt-7 gap-10">
      <div className="w-[40vw]  border-0 border-red-500">
        <img src={Image} alt="Left Image" />
      </div>
      <div className="w-[40vw] flex flex-col items-center justify-center border-0 border-green-500">
        <div className="px-20">
          <H3 className="text-black">Create Account</H3>
        </div>
        <div className="border-0 w-full px-20 mt-5 flex flex-col gap-5 align-middle">
          <input
            className="w-full h-9 border border-gray-606060 text-gray-606060 px-4 flex items-center justify-center"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full h-9 border border-gray-606060 text-gray-606060 px-4 flex items-center justify-center"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-full h-9 border border-gray-606060 text-gray-606060 px-4 flex items-center justify-center"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full h-9 border border-gray-606060 text-gray-606060 px-4 flex items-center justify-center"
            type="text"
            placeholder="Password"
          />

          <ButtonSM className="bg-primary-600 text-white">
            Register Now
          </ButtonSM>
        </div>

        <BSM className='flex gap-5 mt-5' >
          Already Have Account? <span className='text-primary-500'> Login </span>
        </BSM>

        <p className='text-xs mt-5'>Or</p>

        <div className='flex'>



        </div>
      </div>
    </div>
  );
}
