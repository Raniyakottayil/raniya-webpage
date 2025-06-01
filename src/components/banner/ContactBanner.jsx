
import { Link } from 'react-router-dom';
const ContactBanner = () => {
  return (
    <div>
        <div className="relative bg-gradient-to-r from-[#0E1F51] to-[#2A3D75] py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#FF3E54]"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#FF3E54]"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-[#FF3E54]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="flex justify-center items-center text-white mb-4">
          <Link to="/" className="text-[#FF3E54] hover:text-[#ff5c6e] transition-colors font-medium">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Contact</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Contact Us
        </h1>

        {/* Decorative line */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-1 bg-[#FF3E54] rounded-full"></div>
        </div>

        {/* Subheading */}
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Reach out to our team for support, questions, or collaboration inquiries
        </p>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-[#FF3E54] opacity-30 animate-pulse"></div>
      <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-[#FF3E54] opacity-20 animate-ping"></div>
    </div>
    </div>
  )
}

export default ContactBanner