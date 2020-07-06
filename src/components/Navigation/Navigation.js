import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <nav className='pa3' style={{ display: 'flex', justifyContent: 'center' }}>
      <Logo />
      <div className='w-100' style={{ display: 'flex', justifyContent: 'right' }}>
        <p className='f4 link dim pointer'>Sign Out</p>
      </div>
    </nav>
  );
};

export default Navigation;