import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Hero from './components/ui/Hero';
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
