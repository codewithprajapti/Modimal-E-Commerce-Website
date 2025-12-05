import React, { useState } from 'react';

// Simulated components and assets
const HgreenLine = () => (
  <div className="h-10 bg-green-700 text-white flex items-center justify-center text-sm">
    Enjoy Free Shipping On All Orders
  </div>
);
const BLG = ({ children, className, ...props }) => (
  <span className={`text-base ${className}`} {...props}>
    {children}
  </span>
);

const Logo = () => (
  <div className="text-xl font-light tracking-wide">modimal.</div>
);
const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
const ProfileIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const FavoriteIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);
const BagIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

// Dropdown menu data structure
const menuData = {
  Collection: {
    columns: [
      {
        title: 'Category',
        items: [
          'Shop All',
          'Blouses & Top',
          'Pants',
          'Dresses & Jumpsuits',
          'Outwear & Jackets',
          'Pullovers',
          'Tees',
          'Shorts & Skirts',
        ],
      },
      {
        title: 'Featured',
        items: ['New In', 'Modiweek', 'Plus Size', 'Best Seller'],
      },
      {
        title: 'More',
        items: ['Bundles', 'Occasion Wear', 'Matching Set', 'Suiting'],
      },
    ],
    images: [
      { label: 'Bundles', bgColor: 'bg-amber-100' },
      { label: 'Plus Size', bgColor: 'bg-gray-100' },
    ],
  },
  'New In': {
    columns: [
      {
        title: 'Latest Arrivals',
        items: ['This Week', 'Last 30 Days', 'Trending Now', 'Coming Soon'],
      },
      {
        title: 'By Category',
        items: ['New Tops', 'New Dresses', 'New Pants', 'New Accessories'],
      },
    ],
    images: [{ label: 'New Collection', bgColor: 'bg-blue-100' }],
  },
  Modiweek: {
    columns: [
      {
        title: 'Weekly Picks',
        items: [
          'Monday Favorites',
          'Midweek Specials',
          'Weekend Styles',
          'Week Overview',
        ],
      },
      {
        title: 'Inspiration',
        items: ['Outfit Ideas', 'Style Guide', 'Lookbook'],
      },
    ],
    images: [
      { label: 'This Week', bgColor: 'bg-purple-100' },
      { label: 'Style Guide', bgColor: 'bg-pink-100' },
    ],
  },
  'Plus Size': {
    columns: [
      {
        title: 'Shop by Size',
        items: ['Size 1X', 'Size 2X', 'Size 3X', 'Size 4X', 'All Plus Sizes'],
      },
      {
        title: 'Categories',
        items: ['Plus Tops', 'Plus Dresses', 'Plus Pants', 'Plus Outerwear'],
      },
      {
        title: 'Occasions',
        items: ['Casual', 'Work Wear', 'Evening', 'Active'],
      },
    ],
    images: [{ label: 'Plus Size Collection', bgColor: 'bg-green-100' }],
  },
  Sustainability: {
    columns: [
      {
        title: 'Our Commitment',
        items: [
          'Eco-Friendly Materials',
          'Ethical Production',
          'Carbon Neutral',
          'Recycling Program',
        ],
      },
      {
        title: 'Collections',
        items: [
          'Organic Cotton',
          'Recycled Fabrics',
          'Sustainable Denim',
          'Eco Accessories',
        ],
      },
    ],
    images: [
      { label: 'Sustainable Fashion', bgColor: 'bg-emerald-100' },
      { label: 'Eco Materials', bgColor: 'bg-teal-100' },
    ],
  },
};

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
    <div className="flex flex-col w-full bg-white relative">
      <HgreenLine />

      <div className="flex px-20 mt-4 justify-between items-center pb-4">
        <div>
          <Logo />
        </div>

        <div className="flex gap-6 text-gray-600">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <BLG className="cursor-pointer hover:text-black active:text-green-700">
                {item}
              </BLG>
            </div>
          ))}
        </div>

        <div className="flex gap-6 items-center text-gray-600">
          <div className="hover:bg-gray-100 cursor-pointer p-2 rounded">
            <SearchIcon />
          </div>
          <div className="hover:bg-gray-100 cursor-pointer p-2 rounded">
            <ProfileIcon />
          </div>
          <div className="hover:bg-gray-100 cursor-pointer p-2 rounded">
            <FavoriteIcon />
          </div>
          <div className="hover:bg-gray-100 cursor-pointer p-2 rounded">
            <BagIcon />
          </div>
        </div>
      </div>

      {/* Full-width Dropdown Container - positioned absolutely from header */}
      {activeDropdown && menuData[activeDropdown] && (
        <div
          className="absolute left-0 right-0 top-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-screen-xl mx-auto px-20 py-8">
            {/* Columns Section */}
            <div
              className="grid gap-16 mb-8"
              style={{
                gridTemplateColumns: `repeat(${menuData[activeDropdown].columns.length}, 1fr)`,
              }}
            >
              {menuData[activeDropdown].columns.map((column, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-sm mb-4 text-gray-900">
                    {column.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    {column.items.map((listItem, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="hover:text-black cursor-pointer transition-colors"
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Images Section */}
            {menuData[activeDropdown].images &&
              menuData[activeDropdown].images.length > 0 && (
                <div
                  className="grid gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${menuData[activeDropdown].images.length}, 1fr)`,
                  }}
                >
                  {menuData[activeDropdown].images.map((image, idx) => (
                    <div key={idx} className="cursor-pointer group">
                      <div
                        className={`${image.bgColor} h-64 rounded flex items-center justify-center transition-transform group-hover:scale-[1.02]`}
                      >
                        <span className="text-gray-600 text-lg">
                          {image.label}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-gray-700 font-medium">
                        {image.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      )}

      {/* Demo content below to show dropdown properly */}
      <div className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            Hover over any menu item to see its dropdown
          </p>
          <p className="text-sm text-gray-400">
            The dropdown now covers full screen width with centered content
          </p>
        </div>
      </div>
    </div>
  );
}
