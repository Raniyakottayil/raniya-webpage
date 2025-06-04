

import { useNavigate } from 'react-router-dom';
import womanWorking from '../assets/woman-working-call-center.jpg';

const Quote = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact'); 
  };

  return (
    <div className="relative w-full max-w-[945px] min-h-[294px] mx-auto my-12">
      {/* Background Container */}
      <div 
        className="absolute inset-0 bg-[#929499] rounded-[10px] overflow-hidden"
        style={{
          backgroundImage: `url(${womanWorking})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#0E1F51] opacity-80 rounded-[10px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[294px] px-4 py-12 sm:py-16">
        {/* Quote Text */}
        <div className="max-w-[671px]">
          <p className="font-raleway font-bold text-center text-xl sm:text-2xl md:text-[32px] leading-7 sm:leading-9 md:leading-[50px] text-[#F7F7F7]">
            "Some of the History of Our Company is that we are Catching up through Video"
          </p>
        </div>

        {/* Button */}
        <div className="mt-10 sm:mt-12 md:mt-14">
          <button 
            onClick={handleGetInTouch}
            className="bg-[#FF3E54] hover:bg-[#e6374a] transition-colors rounded-[5px] px-8 py-2"
          >
            <span className="font-raleway font-medium text-base leading-[26px] text-white">
              Get In Touch
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
