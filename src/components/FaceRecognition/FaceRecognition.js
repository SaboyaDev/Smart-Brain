import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div>
      <img className='mt5 br4 grow shadow-5' src={imageUrl} alt="" id='image' width='450px' height='auto' />
    </div>
  );
};

export default FaceRecognition;
