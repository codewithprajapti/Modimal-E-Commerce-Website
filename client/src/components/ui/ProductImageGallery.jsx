import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';
import './productImageGallery.css';

export default function ProductGallery() {
  const images = [
    'https://m.media-amazon.com/images/I/61Asq-RS98L._SY879_.jpg',
    'https://m.media-amazon.com/images/I/61lRYAgv48L._SY879_.jpg',
    'https://m.media-amazon.com/images/I/51BsF2aUl1L._SY879_.jpg',
    'https://m.media-amazon.com/images/I/61AgHILcLoL._SY879_.jpg',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  /* 🔁 Auto loop */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="product-gallery">
      {/* Thumbnails */}
      <Swiper
        direction="vertical"
        slidesPerView={4}
        spaceBetween={12}
        freeMode
        modules={[FreeMode]}
        className="thumbs-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <button
              className={`thumb ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img} alt={`thumb-${index}`} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Image */}
      <div className="main-image overflow-hidden">
        <img
          src={images[activeIndex]}
          alt="product"
          className="main-product-image"
        />
      </div>
    </div>
  );
}
