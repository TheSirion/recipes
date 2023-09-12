import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Auth from './pages/Auth';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div>
      <Navbar />
      <Homepage />

      {/*   
      <Auth />
       */}
    </div>
  );
}

export default App;
