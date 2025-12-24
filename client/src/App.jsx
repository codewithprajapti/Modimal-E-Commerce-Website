import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Register from './pages/Register';
import Login from './pages/Login';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import SustainabilityMission from './pages/SustainabilityMission';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sustainability-mission" element={<SustainabilityMission />} />
        </Route>
      </Routes>
    </>
  );
}
