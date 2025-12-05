import React from 'react';
import HgreenLine from './HgreenLine';
import { NavLink } from 'react-router';

import BLG from '../typography/body/BLG';

// Image and Icons

import Logo from '../../assets/Logo.svg';
import SearchIcon from '../../assets/icons/Header-search-icon.svg';
import ProfileIcon from '../../assets/icons/Header-profile-icon.svg';
import FavoriteIcon from '../../assets/icons/Header-favorite-icon.svg';
import BagIcon from '../../assets/icons/Header-bag-icon.svg';

export default function Header() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HgreenLine />

      <div className="flex px-20 mt-4 justify-between">
        <div>
          <img src={Logo} alt="Modimal" />
        </div>

        {/* NavBar */}

        <div className="flex gap-6 text-gray-404040">
          <BLG className="cursor-pointer hover:text-black active:text-primary-600">
            Collection
          </BLG>
          <BLG className="cursor-pointer hover:text-black active:text-primary-600">
            New In
          </BLG>
          <BLG className="cursor-pointer hover:text-black active:text-primary-600">
            Modiweek
          </BLG>
          <BLG className="cursor-pointer hover:text-black active:text-primary-600">
            Plus Size
          </BLG>
          <BLG className="cursor-pointer hover:text-black active:text-primary-600">
            Sustainability
          </BLG>
        </div>

        {/* Icons */}

        <div className="flex gap-6 items-center">
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={SearchIcon}
            alt="SearchIcon"
          />
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={ProfileIcon}
            alt="ProfileIcon"
          />
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={FavoriteIcon}
            alt="FavoriteIcon"
          />
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={BagIcon}
            alt="BagIcon"
          />
        </div>
      </div>
    </div>
  );
}
