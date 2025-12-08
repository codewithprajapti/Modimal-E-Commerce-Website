import React from 'react';
import HgreenLine from './HgreenLine';
import { NavLink } from 'react-router';

import BLG from '../typography/body/BLG';

// Image and Icons

import Logo from '../../assets/Logo.svg';
import { Icons } from '../../utils/headerImages';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    'Collection',
    'New In',
    'Modiweek',
    'Plus Size',
    'Sustainability',
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <HgreenLine />

      <div className="flex px-20 mt-4 justify-between">
        <div>
          <img src={Logo} alt="Modimal" />
        </div>

        {/* NavBar */}

        <div className="flex gap-6 text-gray-404040">
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
            onMouseEnter={() => setActiveDropdown(item)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Collection
          </BLG>
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
            onMouseEnter={() => setActiveDropdown(item)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            New In
          </BLG>
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
          >
            Modiweek
          </BLG>
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
            onMouseEnter={() => setActiveDropdown(item)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Plus Size
          </BLG>
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
            onMouseEnter={() => setActiveDropdown(item)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Sustainability
          </BLG>
        </div>

        {/* Icons */}

        <div className="flex gap-6 items-center">
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={Icons.SearchIcon}
            alt="SearchIcon"
          />
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={Icons.ProfileIcon}
            alt="ProfileIcon"
          />
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={Icons.FavoriteIcon}
            alt="FavoriteIcon"
          />
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={Icons.BagIcon}
            alt="BagIcon"
          />
        </div>
      </div>
    </div>
  );
}
