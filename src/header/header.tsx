
import React from 'react';
import './header.css';
import profile from './profile.jpg'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-item">
          <img src={profile} alt="Tobias Hansen" className="profile-image" />
        </div>
        <div className="header-content-item">
          <h1 className="name">Tobias Hansen</h1>
          <h2 className="desc">Utvikler</h2>
          <div className="links">
            <a href="https://www.linkedin.com/in/tobias-hansen-350b9379/" className="icon-link">
              <AiFillLinkedin size={45} />
            </a>
            <a href="https://github.com/TobiasHansen" className="icon-link">
              <AiFillGithub size={45} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
