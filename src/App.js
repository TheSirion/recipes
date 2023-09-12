import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Auth from './pages/Auth';

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
