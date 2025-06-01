
import { Lightbulb, Star } from 'lucide-react';
import teamworking from '../assets/teamworking.jpg'

const Services = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left image */}
        <img
          src={teamworking}
          alt="Team working"
          className="w-full rounded-xl object-cover shadow-lg"
        />

        {/* Right content */}
        <div>
          <p className="text-rose-500 text-xl font-semibold mb-2">\\ What We Do //</p>
          <h2 className="text-4xl font-bold text-blue-900 leading-snug mb-6">
            We Develope Product That <br /> People Love to Use.
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
             we specialize in creating innovative and reliable data-driven solutions designed to empower businesses and simplify complex challenges. Our products combine cutting-edge technology with user-centric design to deliver seamless experiences that truly make a difference. We understand the importance of clear, effective, and engaging software that meets real-world needs — because technology should work for you, not the other way around.


          </p>

          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 border border-rose-100">
              <div className="p-3 bg-rose-100 rounded-full text-rose-500">
                <Lightbulb size={28} />
              </div>
              <div>
                <h4 className="text-rose-500 font-bold text-lg mb-1">Our Vision</h4>
                <p className="text-gray-600">To become a leading provider of intelligent,data-driven digital solutions ...</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 border border-rose-100">
              <div className="p-3 bg-rose-100 rounded-full text-rose-500">
                <Star size={28} />
              </div>
              <div>
                <h4 className="text-rose-500 font-bold text-lg mb-1">Our Goal</h4>
                <p className="text-gray-600">To deliver innovative, scalable,and user-friendly technology products...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
