import heroImage from '../assets/hero.png'; 
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Circles */}
      <div className="absolute top-20 left-0 w-56 h-56 bg-rose-100 rounded-full opacity-50 z-0"></div>
      <div className="absolute bottom-[-80px] left-1/3 w-72 h-72 bg-gray-100 rounded-full opacity-50 z-0"></div>
      <div className="absolute bottom-10 right-0 w-40 h-40 bg-gray-100 rounded-full opacity-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl space-y-6">
          <p className="text-rose-500 font-semibold text-lg">\\ We Are Here \\</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
            Better Insights For <br /> Business Growth
          </h1>
          <Link
  to="/about"
  className="inline-block bg-rose-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-rose-600 transition"
>
  View More
</Link>
        </div>

        {/* Right Image */}
        <div className="mb-10 lg:mb-0 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] bg-rose-100 rounded-full scale-110"></div>
          </div>
          <img
            src={heroImage}
            alt="Business Woman"
            className="relative w-[300px] sm:w-[350px] lg:w-[400px] object-cover z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
