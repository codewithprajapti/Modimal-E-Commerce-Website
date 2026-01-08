import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './productImageGallery.css';

export default function ProductImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    'https://m.media-amazon.com/images/I/61Asq-RS98L._SY879_.jpg',
    'https://m.media-amazon.com/images/I/61lRYAgv48L._SY879_.jpg',
    'https://m.media-amazon.com/images/I/51BsF2aUl1L._SY879_.jpg',
    'https://m.media-amazon.com/images/I/61AgHILcLoL._SY879_.jpg',
  ];

  return (
    <div className="product-gallery">
      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        spaceBetween={12}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Thumbs]}
        className="thumbs-swiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`thumb-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Image */}
      <Swiper
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="main-swiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`product-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
