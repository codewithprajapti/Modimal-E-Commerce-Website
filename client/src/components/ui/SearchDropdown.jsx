// src/components/.../SearchDropdown.jsx
import { useState } from 'react';
import { Icons } from '../../utils/headerImages';

export default function SearchDropdown({ isOpen, onClose }) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  if (!isOpen) return null;

  return (
    <div className="mt-6 px-20">
      <div
        className={`flex items-center justify-between pb-2 border-b transition ${
          isFocused ? 'border-primary-600' : 'border-gray-ededed'
        }`}
      >
        {/* left: icon + input */}
        <div className="flex items-center gap-3 flex-1">
          <img
            src={Icons.SearchIcon}
            alt="search"
            className="w-4 h-4 opacity-60"
          />

          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search"
            className="w-full outline-none text-sm text-gray-500 placeholder:text-gray-400 bg-transparent"
          />
        </div>

        {/* right: close button */}
        <button
          type="button"
          onClick={() => {
            onClose();
            setSearchValue('');
          }}
          className="ml-4 text-gray-400 hover:text-black text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
