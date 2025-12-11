import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HgreenLine from './HgreenLine';
import { BLG } from '../typography/body';
import Logo from '../../assets/Logo.svg';
import { Icons } from '../../utils/headerImages';
import NavDropdown from './NavDropdown';
import SearchDropdown from './SearchDropdown';

export default function Header({ isSearchOpen, setIsSearchOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const profileClick = () => {
    navigate('/register');
  };
  const homeNavigate = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col w-full bg-white relative z-50">
      <HgreenLine />

      {/* TOP BAR */}
      <div className="flex px-20 mt-4 justify-between items-center">
        <div className="cursor-pointer" onClick={homeNavigate}>
          <img src={Logo} alt="Modimal" />
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-gray-404040">
          {[
            'Collection',
            'New In',
            'Modiweek',
            'Plus Size',
            'Sustainability',
          ].map((item) => (
            <BLG
              key={item}
              className="cursor-pointer relative hover:text-black active:text-primary-600"
              onMouseEnter={() => setActiveDropdown(item)}
            >
              {item}
            </BLG>
          ))}
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
            onClick={profileClick}
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
    </div>
  );
}
