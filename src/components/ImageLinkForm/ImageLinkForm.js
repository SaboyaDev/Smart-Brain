import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f5 pa2'>
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div className='center ma3'>
        <div className='imageLinkForm form center pa3 br3 shadow-5'>
          <input type="text" className='f5 pa1 w-70 center' />
          <button id='detectBtn' className='w-30 grow f7 link ph3 pv3 dib white' >Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;