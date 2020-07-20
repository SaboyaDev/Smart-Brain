import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    isSignedIn
      ?
      <nav className='pa3' style={{ display: 'flex', justifyContent: 'center' }}>
        <Logo />
        <div className='w-100' style={{ display: 'flex', justifyContent: 'right' }}>
          <p onClick={() => { onRouteChange('signout'); }}
            className='f4 link dim pointer'>Sign Out</p>
        </div>
      </nav>
      :
      <nav className='pa3' style={{ display: 'flex', justifyContent: 'center' }}>
        <Logo />
        <div className='w-100' style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p onClick={() => onRouteChange('signin')} className='f4 link dim pointer' style={{ marginRight: '15px' }} >
            Sign In
          </p>
          <p onClick={() => onRouteChange('register')} className='f4 link dim pointer' >
            Register
          </p>
        </div>
      </nav>
  );
};

export default Navigation;