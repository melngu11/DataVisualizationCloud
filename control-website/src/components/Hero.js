import React, { useState, useEffect }  from 'react';
import {Button} from './Button';
import './Hero.css';
import '../App.css';


function Hero() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <div className='hero-container'>
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <h1>Data Driven Gun Control</h1>
          <p className='hero-small'>Exploring gun violence in America</p>
          <div className='hero-btns'>
          
          <iframe
              src="https://lookerstudio.google.com/embed/reporting/df848f2a-9b3c-45e3-9a79-6b00e3a66dc8/page/VgD"
              width={width > 600 ? "900" : "100%"}
              height={height > 700 ? "700" : "100%"}
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>

          </div>
        </div>
      );
    }


export default Hero;