import React from 'react';
import HeroSection from '../components/HeroSection';
import Feed from '../components/Feed';
import RecommendedGroups from '../components/RecommendedGroups';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 pe-md-4">
            <Feed />
          </div>
          <div className="col-md-4">
            <RecommendedGroups />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
