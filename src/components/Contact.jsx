
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0E1F51] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-500 mb-4">Get In Touch</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Hey! Let's Talk</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-800 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#FF3E54] outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-800 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#FF3E54] outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-800 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#FF3E54] outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="mb-8">
                <label className="block text-lg font-medium text-gray-800 mb-2">Your Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#FF3E54] outline-none transition-colors"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#FF3E54] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e02e42] transition-colors flex items-center justify-center gap-3"
              >
                <span>Send Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
              {/* Call Anytime Section */}
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-[#FF3E54] p-3 rounded-full text-white">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Call Anytime</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-[#FF3E54]">•</span> 91.32578 27867
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-[#FF3E54]">•</span> 91.67678 92578
                    </li>
                  </ul>
                </div>
              </div>

              {/* Send Email Section */}
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-[#FF3E54] p-3 rounded-full text-white">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Send Email</h3>
                  <ul className="space-y-1">
                    <li className="text-gray-700">connect@tiffrms.com</li>
                    <li className="text-gray-700">hello@tiffrms.com</li>
                  </ul>
                </div>
              </div>

              {/* Visit Us Section */}
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-[#FF3E54] p-3 rounded-full text-white">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
                  <p className="text-gray-700">
                    20 Island Park Road,<br />
                    New Jersey, New York, USA
                  </p>
                </div>
              </div>

              {/* Follow Us Section */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-[#0E1F51] text-white p-3 rounded-full hover:bg-[#FF3E54] transition-colors">
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a href="#" className="bg-[#0E1F51] text-white p-3 rounded-full hover:bg-[#FF3E54] transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="bg-[#0E1F51] text-white p-3 rounded-full hover:bg-[#FF3E54] transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="bg-[#0E1F51] text-white p-3 rounded-full hover:bg-[#FF3E54] transition-colors">
                    <FaLinkedinIn className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;