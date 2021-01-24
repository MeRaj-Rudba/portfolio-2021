import React from 'react';
import '../App.css'
import heroVideo from '../videos/video3.mp4'
import { Button } from './Button';
import './HeroSection.css';
const HeroSection = () => {
    return (
        <div className='hero-container'>
          <video src={heroVideo} autoPlay loop muted />
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
          </div>
        </div>
      );
    }
    
    export default HeroSection;