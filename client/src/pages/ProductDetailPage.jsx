import React from 'react';
import ProductImageGallery from '../components/ui/ProductImageGallery';
import ProductTitle from '../components/ui/ProductTitle';
import ProductDescription from '../components/ui/ProductDescription';

export default function ProductDetailPage() {
  return (
    <div className="flex flex-col px-20 gap-10">
      <div className="grid grid-cols-2 gap-10">
        <ProductImageGallery />
        <ProductTitle />
      </div>
      <div className="grid grid-cols-2 gap-10">
        <ProductDescription />
      </div>
    </div>
  );
}
