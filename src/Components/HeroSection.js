import React from 'react';
import '../App.css'
import heroVideo from '../videos/video3.mp4'
import { Button } from './Button';
import './HeroSection.css';
const HeroSection = () => {
  const ReactRotatingText = require('react-rotating-text');
  return (
    <div className='hero-container'>
      <div className="rotating-text-wrapper">
        <video src={heroVideo} autoPlay loop muted />

        <p className="rotating-first-text">I do</p>
        <ReactRotatingText className="rotating-text" color="#5F1BBF" items={['Illustration', 'Web Design', 'React Development', 'UI/UX Design']} />


        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            HIRE ME
            </Button>
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;