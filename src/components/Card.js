import React from "react";
import "./css/Card.css";

const Card = ({ type, image, title, description, author, views, date, location, action, buttonText }) => {
  const getTypeEmoji = (type) => {
    switch (type.toLowerCase()) {
      case 'article':
        return '✍️';
      case 'event':
        return '🗓️';
      case 'education':
        return '🎓';
      case 'job':
        return '💼';
      default:
        return '📄';
    }
  };

  const getButtonClass = () => {
    if (buttonText?.toLowerCase().includes('website')) return 'website-btn';
    if (buttonText?.toLowerCase().includes('timesjobs')) return 'jobs-btn';
    return '';
  };

  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <p className="card-type">{getTypeEmoji(type)} {type}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          {type.toLowerCase() === 'job' ? (
            <div className="info-group">
              <div className="description-with-icon">
                <img 
                  src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-work_outline-24px'%20clip-path='url(%23clip0_1_941)'%3e%3cpath%20id='Vector'%20d='M11.6667%205.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341%206.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667%205.00008C17.5917%205.00008%2018.3334%205.74175%2018.3334%206.66675V15.8334C18.3334%2016.7584%2017.5917%2017.5001%2016.6667%2017.5001H3.33341C2.40841%2017.5001%201.66675%2016.7584%201.66675%2015.8334L1.67508%206.66675C1.67508%205.74175%202.40841%205.00008%203.33341%205.00008H6.66675V3.33341C6.66675%202.40841%207.40841%201.66675%208.33342%201.66675H11.6667C12.5917%201.66675%2013.3334%202.40841%2013.3334%203.33341V5.00008H16.6667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_941'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="company"
                  style={{ width: '16px', marginRight: '4px' }}
                />
                {description}
              </div>
              <div className="description-with-icon">
                <img 
                  src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="location"
                  style={{ width: '16px', marginRight: '4px' }}
                />
                {location}
              </div>
            </div>
          ) : type.toLowerCase() === 'meetup' ? (
            <div className="info-group">
              <div className="description-with-icon">
                <img 
                  src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-today-24px'%20clip-path='url(%23clip0_1_895)'%3e%3cpath%20id='Vector'%20d='M15.8333%202.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167%202.49992%202.50833%203.24992%202.50833%204.16659L2.5%2015.8333C2.5%2016.7499%203.24167%2017.4999%204.16667%2017.4999H15.8333C16.75%2017.4999%2017.5%2016.7499%2017.5%2015.8333V4.16659C17.5%203.24992%2016.75%202.49992%2015.8333%202.49992ZM15.8333%2015.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333%208.33325H10V12.4999H5.83333V8.33325Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_895'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="date"
                  style={{ width: '16px', marginRight: '4px' }}
                />
                {description}
              </div>
              <div className="description-with-icon">
                <img 
                  src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="location"
                  style={{ width: '16px', marginRight: '4px' }}
                />
                {location}
              </div>
            </div>
          ) : (
            description
          )}
        </p>
        <div className="card-footer">
          <div className="author-section">
            <img src={author.image} alt={author.name} className="author-image" />
            <div className="author-details">
              <span className="author-name">{author.name}</span>
            </div>
          </div>
          <div className="action-section">
            <span className="views">
              <i className="bi bi-eye"></i> {views}
            </span>
            <button className="share-btn">
              <img 
                src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-share-24px'%20clip-path='url(%23clip0_1_1104)'%3e%3cpath%20id='Vector'%20d='M13.5%2012.06C12.93%2012.06%2012.42%2012.285%2012.03%2012.6375L6.6825%209.525C6.72%209.3525%206.75%209.18%206.75%209C6.75%208.82%206.72%208.6475%206.6825%208.475L11.97%205.3925C12.375%205.7675%2012.9075%206%2013.5%206C14.745%206%2015.75%204.995%2015.75%203.75C15.75%202.505%2014.745%201.5%2013.5%201.5C12.255%201.5%2011.25%202.505%2011.25%203.75C11.25%203.93%2011.28%204.1025%2011.3175%204.275L6.03%207.3575C5.625%206.9825%205.0925%206.75%204.5%206.75C3.255%206.75%202.25%207.755%202.25%209C2.25%2010.245%203.255%2011.25%204.5%2011.25C5.0925%2011.25%205.625%2011.0175%206.03%2010.6425L11.37%2013.7625C11.3325%2013.92%2011.31%2014.085%2011.31%2014.25C11.31%2015.4575%2012.2925%2016.44%2013.5%2016.44C14.7075%2016.44%2015.69%2015.4575%2015.69%2014.25C15.69%2013.0425%2014.7075%2012.06%2013.5%2012.06Z'%20fill='%232D2D2D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1104'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                alt="share"
              />
            </button>
          </div>
        </div>
        {action && (
          <div className="card-actions">
            <button className={`card-button ${getButtonClass()}`}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
