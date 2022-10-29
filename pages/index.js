import HeroBanner from './components/HeroBanner';
import NavBar from './components/NavBar';
import NewReleases from './components/NewReleases';
import React from 'react';

const Index = () => {
  return (
    <div>
      <React.StrictMode>
        <NavBar />
        <HeroBanner />
        <div className="text-shoutout text-center">
          <h2>Covid-19 Update</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            laudantium accusantium, corrupti tenetur, deleniti consequatur quae
            enim ullam quibusdam iste voluptate, nemo iusto animi. Illum nihil
            et totam ducimus error? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum inventore molestias rem voluptate nisi
            repellendus quibusdam, necessitatibus expedita. Est optio similique
            rem asperiores quidem doloribus recusandae exercitationem vitae
            dolore minima?
          </p>
        </div>
        <NewReleases />
      </React.StrictMode>
    </div>
  );
};

export default Index;
