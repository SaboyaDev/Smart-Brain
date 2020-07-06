import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

const Logo = () => {
  return (
    <div className='w-100'>
      <Tilt className='Tilt br-100 shadow-2'
        options={{ max: 65 }}
        style={{ height: 75, width: 75, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <div className='Tilt-inner'>
          <img style={{ height: '50px', width: '50px' }} src={brain} alt='logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;