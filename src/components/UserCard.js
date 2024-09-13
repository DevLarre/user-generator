import React, { useState } from 'react';
import male from '../assets/male-svgrepo-com (1).svg'
import female from '../assets/female-svgrepo-com (1).svg'
import gmail from '../assets/gmail-svgrepo-com.svg';
import calendar from '../assets/calendar-svgrepo-com.svg'
import earth from '../assets/earth-9-svgrepo-com.svg'
import googleMaps from '../assets/google-maps-svgrepo-com (1).svg'
import whatsapp from '../assets/whatsapp-svgrepo-com (2).svg'
import './UserCard.css';

const UserCard = ({ user }) => {
  const [hoverInfo, setHoverInfo] = useState({ label: 'My email address is', value: user.email });

  const handleMouseOver = (label, value) => {
    setHoverInfo({ label, value });
  };

  const genderIcon = user.gender === 'male' 
    ? <img src={male} alt="gender-neutral-user" className="icon_img" />
    : <img src={female} alt="person-female" className="icon_img" />;

  return (
    <div className="user-card">
      <div className="user-info">
        <img src={user.picturePerson} alt={user.name} className="profile-pic" />
        <p className="text-user">{hoverInfo.label}</p>
        <h2 className="user-information">{hoverInfo.value}</h2>
        <ul className="icon-list">
          <li className="icon-item" onMouseOver={() => handleMouseOver('My username is', user.username)}>
            <span className="icon">{genderIcon}</span>
          </li>
          <li className="icon-item" onMouseOver={() => handleMouseOver('My email address is', user.email)}>
            <span className="icon"><img src={gmail} alt="email" className="icon_img" /></span>
          </li>
          <li className="icon-item" onMouseOver={() => handleMouseOver('My birth date is', user.dateOfBirth)}>
            <span className="icon"><img src={calendar} alt="birthdate" className="icon_img" /></span>
          </li>
          <li className="icon-item" onMouseOver={() => handleMouseOver('My country and my state are', `${user.country}, ${user.state}`)}>
            <span className="icon"><img src={earth} alt="location" className="icon_img" /></span>
          </li>
          <li className="icon-item" onMouseOver={() => handleMouseOver('I live in', user.city)}>
            <span className="icon"><img src={googleMaps} alt="city" className="icon_img" /></span>
          </li>
          <li className="icon-item" onMouseOver={() => handleMouseOver('My phone number is', user.cell)}>
            <span className="icon"><img src={whatsapp} alt="phone" className="icon_img" /></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
