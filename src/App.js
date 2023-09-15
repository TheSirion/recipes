import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Auth from './pages/Auth';
import HomepageCarousel from './components/HomepageCarousel';
// import 'node_modules/scroll-carousel/dist/scroll.carousel.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
  
      {/* <Auth /> */}
       
    </div>
  );
}

export default App;
