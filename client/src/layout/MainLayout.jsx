import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

export default function MainLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5">
      <Header isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />

      <div
        className={`grow transition-all duration-300 ${
          isSearchOpen ? 'blur-sm' : ''
        }`}
      >
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
