import React from 'react';
import { Images } from '../../utils/headerImages';
import { BLG, BMD } from '../typography/body';

export default function NavDropdown({ setActiveDropdown, activeDropdown }) {
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
        { label: 'Bundles', src: Images.Blouses },
        { label: 'Plus Size', src: Images.PlusSize },
      ],
    },
    'New In': {
      columns: [
        {
          title: 'Category',
          items: [
            'Shop All',
            'Tops & Blouses',
            'Tees',
            'Pants',
            'Jackets & Outwears',
            'Pullovers',
            'Dresses & Jumpsuits',
            'Shorts & Skirts',
          ],
        },
        {
          title: 'Trending',
          items: ['Plus Size', 'Fall Collection', 'Modiweek'],
        },
      ],
      images: [
        { label: 'FallCollection', src: Images.FallCollection },
        { label: 'Blouses', src: Images.NewINBlouses },
        { label: 'Dresses', src: Images.Dresses },
      ],
    },
    // Modiweek: {
    //   columns: [
    //     {
    //       title: 'Weekly Picks',
    //       items: [
    //         'Monday Favorites',
    //         'Midweek Specials',
    //         'Weekend Styles',
    //         'Week Overview',
    //       ],
    //     },
    //     {
    //       title: 'Inspiration',
    //       items: ['Outfit Ideas', 'Style Guide', 'Lookbook'],
    //     },
    //   ],
    //   images: [
    //     { label: 'This Week', bgColor: 'bg-purple-100' },
    //     { label: 'Style Guide', bgColor: 'bg-pink-100' },
    //   ],
    // },
    'Plus Size': {
      columns: [
        {
          title: 'Categories',
          items: [
            'Shop All',
            'Top & Blouses',
            'Tees',
            'Pants',
            'Jackets & Outwears',
            'Pullovers',
            'Dresses & Jumpsuits',
            'Shorts & Skirts',
          ],
        },
      ],
      images: [
        { label: 'Pants', src: Images.Pants },
        { label: 'Dresses', src: Images.PlusSizeDresses },
        { label: 'Blouses', src: Images.PlusSizeBlouses },
      ],
    },
    Sustainability: {
      columns: [
        {
          title: 'Sustainability',
          items: [
            'Mission',
            'Processing',
            'Materials',
            'Packaging',
            'Product Care',
            'Our Suppliers',
          ],
        },
      ],
      images: [
        { label: '', src: Images.Sustainability1 },
        { label: '', src: Images.Sustainability2 },
      ],
    },
  };

  return (
    <>
      {activeDropdown && menuData[activeDropdown] && (
        // Main Div
        <div
          className="absolute left-0 right-0 top-20 w-full bg-white z-50"
          onMouseEnter={() => {
            setActiveDropdown(activeDropdown);
          }}
          onMouseLeave={() => {
            setActiveDropdown(null);
          }}
        >
          {/* Div for Designing */}

          <div className="bg-white mt-7 flex flex-wrap px-20 justify-between">
            {/* Deatils Div */}
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: `repeat(${menuData[activeDropdown].columns.length}, 1fr)`,
              }}
            >
              {menuData[activeDropdown].columns.map((col, index) => {
                return (
                  <div key={index}>
                    <BLG className="text-black active:text-primary-600">
                      {col.title}
                    </BLG>
                    <div className="mt-5 space-y-3 flex flex-col">
                      {col.items.map((item, index) => {
                        return (
                          <BLG
                            key={index}
                            className="text-gray-404040 hover:text-black active:text-primary-600 cursor-pointer"
                          >
                            {item}
                          </BLG>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${menuData[activeDropdown].images.length}, 1fr)`,
              }}
            >
              {menuData[activeDropdown].images.map((image, index) => {
                return (
                  <div className="flex flex-col">
                    <img src={image.src} alt={image.label} />

                    <BMD className="text-black mt-5"> {image.label} </BMD>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
