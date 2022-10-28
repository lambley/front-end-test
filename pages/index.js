import HeroBanner from './components/HeroBanner';
import NavBar from './components/NavBar';
import React from 'react';

const Index = () => {
  return (
    <div>
      <React.StrictMode>
        <NavBar />
        <HeroBanner />
      </React.StrictMode>
    </div>
  );
};

export default Index;
