import React from 'react';
import Header from './components/ui/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="">
      <Header />
      {/* <Register /> */}
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
