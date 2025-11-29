import React from "react";

const services = [
  "UI/UX Design",
  "Frontend Development",
  "Building in Webflow",
  "SEO Optimization",
  "Graphic Design",
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="font-sans font-bold text-5xl text-[#363B4E] mb-12">Services</h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start md:w-1/3">
              <p className="font-prompt text-2xl font-medium text-gray-800 mb-2">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
