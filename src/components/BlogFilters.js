import React, { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const BlogFilters = () => {
  const [isGroupMember, setIsGroupMember] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const isMobile = useWindowWidth();

  if (isMobile) {
    return (
      <div className="d-flex justify-content-between align-items-center py-3">
      <div className="d-flex justify-content-start align-items-center" style={{ fontWeight: 'bold', marginLeft: '16px', marginRight: '16px' }}>
          Posts(368)
      </div>
      <div className="d-flex justify-content-end align-items-center" style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
        <select className="mobile-filter-select" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
          <option value="all">Filter: All</option>
          <option value="article">Article</option>
          <option value="event">Event</option>
          <option value="education">Education</option>
          <option value="job">Job</option>
        </select>
      </div>
      </div>
    );
  }

  const customTabStyle = {
    borderBottom: '2px solid transparent',
    color: '#000',
    padding: '8px 16px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const getTabStyle = (itemName) => ({
    ...customTabStyle,
    ...(hoveredItem === itemName && {
      color: '#0d6efd',
      borderBottom: '1px solid #0d6efd'
    })
  });

  const activeTabStyle = {
    ...customTabStyle,
    backgroundColor: 'transparent',
    borderBottom: '2px solid black',
    color: '#000'
  };

  const dropdownArrowStyle = {
    display: 'inline-block',
    width: '0',
    height: '0',
    marginLeft: '8px',
    verticalAlign: 'middle',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '5px solid #000'
  };

  const handleGroupToggle = () => {
    setIsGroupMember(!isGroupMember);
  };

  return (
    <div className="container border-bottom py-3">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
        <div className="overflow-auto mb-3 mb-md-0">
          <ul className="nav flex-nowrap">
            <li className="nav-item">
              <a className="nav-link" style={activeTabStyle} href="#">All Posts(32)</a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                style={getTabStyle('article')} 
                href="#"
                onMouseEnter={() => setHoveredItem('article')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Article
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                style={getTabStyle('event')} 
                href="#"
                onMouseEnter={() => setHoveredItem('event')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Event
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                style={getTabStyle('education')} 
                href="#"
                onMouseEnter={() => setHoveredItem('education')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                style={getTabStyle('job')} 
                href="#"
                onMouseEnter={() => setHoveredItem('job')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Job
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center gap-2 justify-content-end">
          <button
            className="btn btn-light d-inline-flex align-items-center"
            style={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}
          >
            Write a post
            <span style={dropdownArrowStyle}></span>
          </button>
          <button 
            className={`btn ${isGroupMember ? 'btn-outline-secondary' : 'btn-primary'} d-inline-flex align-items-center`}
            onClick={handleGroupToggle}
            style={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}
          >
            <i className={`bi ${isGroupMember ? 'bi-box-arrow-right' : 'bi-person-plus'} me-1`}></i>
            <span>{isGroupMember ? 'Leave Group' : 'Join Group'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
