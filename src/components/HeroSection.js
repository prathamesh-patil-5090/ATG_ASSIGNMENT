import React, { useState } from "react";
import bgImage from "../atg_icons/Rectangle2_1.png";
import BlogFilters from "./BlogFilters";
import useWindowWidth from "../hooks/useWindowWidth";

const HeroSection = () => {
  const isMobile = useWindowWidth();
  const [isJoined, setIsJoined] = useState(false);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '440px',
    position: 'relative'
  };

  return (
    <div className="hero-section">
      <div style={heroStyle} className="w-100">
        <div className="container h-100 position-relative">
          {isMobile && (
            <div className="d-flex justify-content-between align-items-center" style={{ position: 'absolute', top: '20px', left: '0', right: '0', zIndex: 100 }}>
              <div style={{ marginLeft: '16px' }}>
                <img 
                  src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%207H3.83L9.42%201.41L8%200L0%208L8%2016L9.41%2014.59L3.83%209H16V7Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="back"
                  className="back-arrow"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              
              <div 
                onClick={() => setIsJoined(!isJoined)} 
                className="group-action"
                style={{ marginRight: '16px' }}
              >
                {isJoined ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ marginRight: '8px' }}>
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                  </svg>
                ) : null}
                <span className="action-text" style={{ color: 'white' }}>{isJoined ? 'Leave Group' : 'Join Group'}</span>
              </div>
            </div>
          )}
          <div className="row h-100">
            <div className="col-12 d-flex align-items-end">
              <div className="text-white pb-5 ps-4">
                <h1 className="display-4 fw-bold mb-2 mobile-title text-start">Computer Engineering</h1>
                <p className="lead mb-4 text-start">142,765 Computer Engineers follow this</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogFilters />
    </div>
  );
};

export default HeroSection;
