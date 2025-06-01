
import { FiSend } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0E1F51] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">CDteck</h2>
            <p className="text-gray-300 leading-relaxed">
              is a dynamic technology solutions provider specializing in custom software development, web design, and digital transformation services. With a focus on innovation and client success, CDteck empowers businesses through cutting-edge tech and reliable support.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[#FF3E54] inline-block">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Design/Development",
                "App Development",
                "UI/UX Design",
                "HubSpot Integration",
                "Email Marketing",
                "Website Migration"
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FF3E54] mr-2">•</span>
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[#FF3E54] inline-block">Career</h3>
            <ul className="space-y-4">
              {[
                { title: "React.js Dev.", exp: "5 Years of Exp." },
                { title: "Wordpress Dev.", exp: "5 Years of Exp." },
                { title: "Python Developer", exp: "5 Years of Exp." }
              ].map((job, index) => (
                <li key={index} className="group">
                  <div className="text-white font-medium group-hover:text-[#FF3E54] transition-colors cursor-pointer">
                    {job.title}
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-[#FF3E54] text-lg">+</span>
                    <span className="text-gray-300 ml-1">{job.exp}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[#FF3E54] inline-block">Subscribe Us</h3>
            <p className="text-gray-300 mb-6">
              It is a long established fact that a reader will be distracted by the readable
            </p>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full py-3 px-4 bg-[#1A2C65] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3E54]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF3E54] p-2 rounded-lg">
                <FiSend className="text-xl" />
              </button>
            </div>
            
           
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#2A3D75] my-10"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>© 2025 CDteck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;