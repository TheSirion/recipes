import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
