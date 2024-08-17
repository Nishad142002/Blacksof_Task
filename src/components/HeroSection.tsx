import NavBar from './heroSecComp/NavBar';
import HeroContent from './heroSecComp/HeroContent';

import './style/herosection.css'

import heroImg from '../assets/Blacksof_Assets/Hero_section.png'

function HeroSection() {

  return (
    <div className="main-container">
      <img src={heroImg} alt="Hero" className="hero-img" />
      <NavBar />

      <div className="hero-content">
        <HeroContent />
      </div>

    </div>
  );

};

export default HeroSection;