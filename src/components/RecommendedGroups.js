import React, { useState } from "react";
import "./css/RecommendedGroups.css";
import leisure from "../atg_icons/Rectangle6.png";
import activism from "../atg_icons/Rectangle6-1.png";
import mba from "../atg_icons/Rectangle6-2.png";
import philosophy from "../atg_icons/Rectangle6-3.png";

const RecommendedGroups = () => {
  const initialGroups = [
    { id: 1, name: "Leisure", image: leisure },
    { id: 2, name: "Activism", image: activism },
    { id: 3, name: "MBA", image: mba },
    { id: 4, name: "Philosophy", image: philosophy },
  ];

  const [groups, setGroups] = useState(initialGroups.map(group => ({
    ...group,
    followed: false
  })));

  const [location, setLocation] = useState("");

  const handleFollow = (groupId) => {
    setGroups(prevGroups => prevGroups.map(group => 
      group.id === groupId 
        ? { ...group, followed: !group.followed }
        : group
    ));
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="recommended-groups">
      <div className="location-input">
        <img 
          src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
          alt="location"
          style={{ marginRight: '8px' }}
        />
        <input
          type="text"
          placeholder="Enter your location"
          className="location-field"
          value={location}
          onChange={handleLocationChange}
        />
        <img 
          src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-edit-24px'%20clip-path='url(%23clip0_1_848)'%3e%3cpath%20id='Vector'%20d='M2.5%2014.375V17.5H5.625L14.8417%208.28334L11.7167%205.15834L2.5%2014.375ZM17.2583%205.86667C17.5833%205.54167%2017.5833%205.01667%2017.2583%204.69167L15.3083%202.74167C14.9833%202.41667%2014.4583%202.41667%2014.1333%202.74167L12.6083%204.26667L15.7333%207.39167L17.2583%205.86667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_848'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
          alt="edit"
          style={{ marginLeft: '0px', marginRight: '16px', cursor: 'pointer' }}
        />
      </div>

      <p className="location-note">
        <img 
          src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-error_outline-24px'%20opacity='0.5'%20clip-path='url(%23clip0_1_1239)'%3e%3cpath%20id='Vector'%20d='M7.33333%209.99998H8.66667V11.3333H7.33333V9.99998ZM7.33333%204.66665H8.66667V8.66665H7.33333V4.66665ZM7.99333%201.33331C4.31333%201.33331%201.33333%204.31998%201.33333%207.99998C1.33333%2011.68%204.31333%2014.6666%207.99333%2014.6666C11.68%2014.6666%2014.6667%2011.68%2014.6667%207.99998C14.6667%204.31998%2011.68%201.33331%207.99333%201.33331ZM8%2013.3333C5.05333%2013.3333%202.66667%2010.9466%202.66667%207.99998C2.66667%205.05331%205.05333%202.66665%208%202.66665C10.9467%202.66665%2013.3333%205.05331%2013.3333%207.99998C13.3333%2010.9466%2010.9467%2013.3333%208%2013.3333Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1239'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
          alt="info"
          style={{ marginRight: '8px' }}
        />
        <span style={{ textAlign: 'left', display: 'inline-block' }}>Your location will help us serve better and extend a personalised experience.</span>
      </p>

      <div className="groups-header">
        <img 
          src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='twotone-thumb_up-24px'%20clip-path='url(%23clip0_1_1263)'%3e%3cpath%20id='Vector'%20opacity='0.3'%20d='M15.75%209V7.5H9L10.005%203.495L6.75%206.75V14.25H13.5L15.75%209Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M6.75%2015.75H13.5C14.1225%2015.75%2014.655%2015.375%2014.88%2014.835L17.145%209.5475C17.2125%209.375%2017.25%209.195%2017.25%209V7.5C17.25%206.675%2016.575%206%2015.75%206H11.0175L11.73%202.5725L11.7525%202.3325C11.7525%202.025%2011.625%201.74%2011.4225%201.5375L10.6275%200.75L5.685%205.6925C5.415%205.9625%205.25%206.3375%205.25%206.75V14.25C5.25%2015.075%205.925%2015.75%206.75%2015.75ZM6.75%206.75L10.005%203.495L9%207.5H15.75V9L13.5%2014.25H6.75V6.75ZM0.75%206.75H3.75V15.75H0.75V6.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1263'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
          alt="thumbs-up"
          style={{ marginRight: '8px' }}
        />
        <span>RECOMMENDED GROUPS</span>
      </div>

      <div className="groups-list">
        {groups.map((group) => (
          <div className="group-item" key={group.id}>
            <img src={group.image} alt={group.name} className="group-image" />
            <span className="group-name">{group.name}</span>
            <button 
              className={`follow-btn ${group.followed ? "followed" : ""}`}
              onClick={() => handleFollow(group.id)}
            >
              {group.followed ? "Followed" : "Follow"}
            </button>
          </div>
        ))}
      </div>

      <p className="see-more">See More...</p>
    </div>
  );
};

export default RecommendedGroups;
