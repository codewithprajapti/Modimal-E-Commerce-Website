import React from 'react';
import { Images } from '../../utils/headerImages';
import { BLG, BMD } from '../typography/body';
import { useNavigate } from 'react-router-dom';

export default function NavDropdown({ setActiveDropdown, activeDropdown }) {
  const menuData = {
    Collection: {
      columns: [
        {
          title: 'Category',
          items: [
            { title: 'Shop All', uri: 'shop-all' },
            { title: 'Blouses & Top', uri: '/' },
            { title: 'Pants', uri: '/' },
            { title: 'Dresses & Jumpsuits', uri: '/' },
            { title: 'Outwear & Jackets', uri: '/' },
            { title: 'Pullovers', uri: '/' },
            { title: 'Tees', uri: '/' },
            { title: 'Shorts & Skirts', uri: '/' },
          ],
        },
        {
          title: 'Featured',
          items: [
            { title: 'New In', uri: '/' },
            { title: 'Modiweek', uri: '/' },
            { title: 'Plus Size', uri: '/' },
            { title: 'Best Seller', uri: '/' },
          ],
        },
        {
          title: 'More',
          items: [
            { title: 'Bundles', uri: '/' },
            { title: 'Occasion Wear', uri: '/' },
            { title: 'Matching Set', uri: '/' },
            { title: 'Suiting', uri: '/' },
          ],
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
            { title: 'Shop All', uri: '/' },
            { title: 'Tops & Blouses', uri: '/' },
            { title: 'Tees', uri: '/' },
            { title: 'Pants', uri: '/' },
            { title: 'Jackets & Outwears', uri: '/' },
            { title: 'Pullovers', uri: '/' },
            { title: 'Dresses & Jumpsuits', uri: '/' },
            { title: 'Shorts & Skirts', uri: '/' },
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
            { title: 'Shop All', uri: '/' },
            { title: 'Top & Blouses', uri: '/' },
            { title: 'Tees', uri: '/' },
            { title: 'Pants', uri: '/' },
            { title: 'Jackets & Outwears', uri: '/' },
            { title: 'Pullovers', uri: '/' },
            { title: 'Dresses & Jumpsuits', uri: '/' },
            { title: 'Shorts & Skirts', uri: '/' },
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
            { title: 'Mission', uri: '/sustainability-mission' },
            { title: 'Processing', uri: '/' },
            { title: 'Materials', uri: '/sustainability-material' },
            { title: 'Packaging', uri: '/' },
            { title: 'Product Care', uri: '/' },
            { title: 'Our Suppliers', uri: '/' },
          ],
        },
      ],
      images: [
        { label: '', src: Images.Sustainability1 },
        { label: '', src: Images.Sustainability2 },
      ],
    },
  };

  const navigate = useNavigate();
  const navigateHandler = (uri) => {
    navigate(uri);
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
                            onClick={() => {
                              navigateHandler(item.uri);
                            }}
                          >
                            {item.title}
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
                  <div key={index} className="flex flex-col">
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
