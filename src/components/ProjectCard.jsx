import React from "react";

const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-8 relative flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-lg rounded-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="font-sans font-bold text-5xl text-[#4F3B78]">
            {title}
          </h2>
          <p className="font-prompt font-medium text-lg text-gray-800">{description}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-pink-300 text-gray-800 px-4 py-1 rounded-lg border font-semibold border-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-sans font-bold text-xl text-[#363B4E] mt-4 cursor-pointer">
            View project
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
