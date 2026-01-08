import { Routes, Route } from 'react-router-dom';

// All Import Links

import { Imports } from './utils/appImportLinks';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Imports.MainLayout />}>
          <Route index element={<Imports.Home />} />
          <Route path="/register" element={<Imports.Register />} />
          <Route path="/login" element={<Imports.Login />} />
          <Route path="/faqs" element={<Imports.FAQs />} />
          <Route path="/contact-us" element={<Imports.ContactUs />} />
          <Route
            path="/sustainability-mission"
            element={<Imports.SustainabilityMission />}
          />
          <Route
            path="/sustainability-material"
            element={<Imports.SustainabilityMaterial />}
          />
          <Route path="/payment-sucess" element={<Imports.PaymentSucess />} />
          <Route path="/payment-error" element={<Imports.PaymentError />} />
          <Route path="/shop-all" element={<Imports.ProductListingPage />} />
          <Route
            path="/product-detail-page"
            element={<Imports.ProductDetailPage />}
          />
        </Route>
      </Routes>
    </>
  );
}
