import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import profileImage from "./profile.jpg";
import leetcodeLogo from "./leet-logo2.png";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-image">
        <img src={profileImage} alt="Snehitha Doddipati" />
      </div>
      <div className="home-content">
        <h1 id="p2">Hello, I'm <span className="highlight">"Snehitha Doddipati"</span></h1>
        <p id="p1">And I'm good at "Front-end Development"<br />
         and "Machine Learning"</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/snehitha-doddipati-849185274/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Snehitha-Doddipati" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/snehitha_ammu/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeLogo} alt="LeetCode" style={{ width: '35px', height: '35px' }} />
          </a>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=1I2RgGaCWTNd2uQDm7RyHicTu_XN2_NS8" download="Snehitha_Doddipati_Resume.pdf" className="btn btn-resume">Download Resume</a>
      </div>
    </section>
  );
}

export default Home;
