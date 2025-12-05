import React from 'react';

export default function Test() {
  return (
    <>
      <div className=" left-0 right-0 w-[100%] top-0 pt-4 z-50">
        <div className="bg-white shadow-lg border border-gray-200 rounded-sm ">
          <div className="grid grid-cols-3 gap-8 p-8">
            {/* Category Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-gray-800">
                Category
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer">Shop All</li>
                <li className="hover:text-black cursor-pointer">
                  Blouses & Top
                </li>
                <li className="hover:text-black cursor-pointer">Pants</li>
                <li className="hover:text-black cursor-pointer">
                  Dresses & Jumpsuits
                </li>
                <li className="hover:text-black cursor-pointer">
                  Outwear & Jackets
                </li>
                <li className="hover:text-black cursor-pointer">Pullovers</li>
                <li className="hover:text-black cursor-pointer">Tees</li>
                <li className="hover:text-black cursor-pointer">
                  Shorts & Skirts
                </li>
              </ul>
            </div>

            {/* Featured Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-gray-800">
                Featured
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer">New In</li>
                <li className="hover:text-black cursor-pointer">Modiweek</li>
                <li className="hover:text-black cursor-pointer">Plus Size</li>
                <li className="hover:text-black cursor-pointer">Best Seller</li>
              </ul>
            </div>

            {/* More Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-gray-800">More</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer">Bundles</li>
                <li className="hover:text-black cursor-pointer">
                  Occasion Wear
                </li>
                <li className="hover:text-black cursor-pointer">
                  Matching Set
                </li>
                <li className="hover:text-black cursor-pointer">Suiting</li>
              </ul>
            </div>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4 p-8 pt-0">
            <div className="relative">
              <div className="bg-amber-100 h-48 rounded-sm flex items-center justify-center">
                <span className="text-gray-500">Bundles</span>
              </div>
              <p className="mt-2 text-sm text-gray-700">Bundles</p>
            </div>
            <div className="relative">
              <div className="bg-gray-100 h-48 rounded-sm flex items-center justify-center">
                <span className="text-gray-500">Plus Size</span>
              </div>
              <p className="mt-2 text-sm text-gray-700">Plus Size</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
