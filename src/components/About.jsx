
import aboutus from '../assets/aboutus.jpg'; 
import { FaPhoneAlt } from 'react-icons/fa';


const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutus}
            alt="Team"
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-rose-500 font-semibold text-lg">\\ About us \\</p>
          <h2 className="text-4xl font-bold text-blue-900 leading-snug">
            One of the Fastest Way to <br /> Business Growth
          </h2>
          <p className="text-gray-700 text-lg">
            At CDteck IT, we drive rapid and sustainable business growth by delivering innovative IT solutions tailored to your needs. Our expert team combines technology, data insights, and strategic thinking to help businesses accelerate success in a competitive landscape. We focus on creating value through smart, scalable products and services that empower you to achieve your goals faster and smarter.
          </p>

          {/* Call to Action Box */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <div className="bg-rose-100 p-4 rounded-lg text-rose-500 flex-shrink-0">
              <FaPhoneAlt className="h-6 w-6" />
            </div>
            <div>
              <p className="text-blue-900 font-bold text-lg md:text-xl">
                Get Instant Professional Advice
              </p>
              <p className="text-gray-700 mt-1">
                Ready to Help:
                <span className="text-rose-500 font-semibold ml-2">
                  +1 356 678 7897
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-500">15+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-500">200+</div>
              <div className="text-gray-700 font-medium">Happy Clients</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-4xl font-bold text-rose-500">98%</div>
              <div className="text-gray-700 font-medium">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
