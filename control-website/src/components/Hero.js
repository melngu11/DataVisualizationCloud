import React from 'react';
import {Button} from './Button';
import './Hero.css';
import '../App.css';


function Hero() {
    return (
        <div className='hero-container'>
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <h1>Data Driven Gun Control</h1>
          <p className='hero-small'>Exploring gun violence in America</p>
          <div className='hero-btns'>
          <iframe
  src="https://lookerstudio.google.com/embed/reporting/df848f2a-9b3c-45e3-9a79-6b00e3a66dc8/page/VgD"
  width="900"
  height="700"
  style={{ border: 0 }}
  allowFullScreen
></iframe>

          </div>
        </div>
      );
    }


export default Hero;