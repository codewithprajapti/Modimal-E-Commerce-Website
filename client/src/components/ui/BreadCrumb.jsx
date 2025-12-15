import React from 'react';
import { Link } from 'react-router-dom';
import { BLG } from '../typography/body';

export default function BreadCrumb({ links }) {
  return (
    <div className="flex gap-5 px-23">
      <BLG>
        <Link to="/" className='text-primary-500 hover:text-primary-900 focus:text-black'>Home</Link>
      </BLG>
      {links.map((link, index) => {
        return (
          <div key={index} className="flex gap-5">
            <BLG>/</BLG>
            <BLG>
              <Link className='active:text-primary-500 hover:text-primary-900 focus:text-black' to={link.url}>{link.name}</Link>
            </BLG>
          </div>
        );
      })}
    </div>
  );
}
