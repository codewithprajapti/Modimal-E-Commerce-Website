import { useState } from 'react';
import HgreenLine from './HgreenLine';
import { BLG } from '../typography/body';

// Image and Icons
import Logo from '../../assets/Logo.svg';
import { Icons } from '../../utils/headerImages';
import NavDropdown from './NavDropdown';
import Hero from './Hero';
import SearchDropdown from './SearchDropdown';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-white relative">
      <HgreenLine />

      {/* TOP BAR */}
      <div className="flex px-20 mt-4 justify-between items-center">
        <div>
          <img src={Logo} alt="Modimal" />
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-gray-404040">
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
            onMouseEnter={() => setActiveDropdown('Collection')}
          >
            Collection
          </BLG>
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
            onMouseEnter={() => setActiveDropdown('New In')}
          >
            New In
          </BLG>
          <BLG className="cursor-pointer relative hover:text-black active:text-primary-600">
            Modiweek
          </BLG>
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
            onMouseEnter={() => setActiveDropdown('Plus Size')}
          >
            Plus Size
          </BLG>
          <BLG
            className="cursor-pointer relative hover:text-black active:text-primary-600"
            onMouseEnter={() => setActiveDropdown('Sustainability')}
          >
            Sustainability
          </BLG>
        </div>

        {/* ICONS */}
        <div className="flex gap-6 items-center">
         
          <img
            className="hover:bg-gray-ededed cursor-pointer"
            src={isSearchOpen ? Icons.CloseIcon : Icons.SearchIcon}
            alt={isSearchOpen ? 'Close Search' : 'Open Search'}
            onClick={() => {
              if (isSearchOpen) {
                setIsSearchOpen(false); 
              } else {
                setIsSearchOpen(true); 
                setActiveDropdown(null); 
              }
            }}
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

      {/* NAV DROPDOWN */}
      <NavDropdown
        setActiveDropdown={setActiveDropdown}
        activeDropdown={activeDropdown}
      />

      {/* SEARCH DROPDOWN */}
      <SearchDropdown
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* PAGE CONTENT (BLURRED WHEN SEARCH OPEN) */}
      {/* <div className={`mt-6 transition ${isSearchOpen ? 'blur-sm' : ''}`}>
        <Hero />
      </div> */}
    </div>
  );
}
