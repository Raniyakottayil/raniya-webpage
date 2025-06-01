
import { FaLaptopCode, FaMobileAlt, FaFigma, FaHubspot, FaExchangeAlt, FaEnvelopeOpenText } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      title: "Web Design / Development",
      description: "We craft responsive, visually stunning, and user-friendly websites tailored to your business goals.",
      icon: <FaLaptopCode className="text-4xl text-white" />
    },
    {
      title: "App Development",
      description: "We build high-performance mobile and web applications to deliver seamless experiences.",
      icon: <FaMobileAlt className="text-4xl text-white" />
    },
    {
      title: "UI/UX Design",
      description: "Our designs are intuitive and user-focused, enhancing experience across all devices.",
      icon: <FaFigma className="text-4xl text-white" />
    },
    {
      title: "HubSpot Integration",
      description: "We help you automate workflows and integrate CRM using seamless HubSpot solutions.",
      icon: <FaHubspot className="text-4xl text-white" />
    },
    {
      title: "Website Migration",
      description: "Secure and efficient website migration without data loss or downtime.",
      icon: <FaExchangeAlt className="text-4xl text-white" />
    },
    {
      title: "Email Marketing",
      description: "We create targeted email campaigns that drive conversions and engagement.",
      icon: <FaEnvelopeOpenText className="text-4xl text-white" />
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 text-xl font-semibold mb-2">\\ Our Services //</p>
          <h2 className="text-4xl font-bold text-blue-900 leading-snug">
            Our Expertise
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-rose-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-rose-500 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h4 className="text-rose-500 font-bold text-lg mb-2">
                {service.title}
              </h4>

              {/* Divider */}
              <div className="flex space-x-2 mb-4">
                <div className="w-[60px] h-[6px] bg-rose-500 rounded-full"></div>
                <div className="w-[20px] h-[6px] bg-rose-500 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
