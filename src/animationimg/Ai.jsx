import React from 'react';
import Lottie from 'lottie-react';
import LottieAi from '../assets/lottiejson/Animation - 1738484422085.json'

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie 
        animationData={LottieAi} 
        loop={true} 
        style={{ width: 300, height: 300 }} 
      />
    </div>
  );
};

export default LottieAnimation;
