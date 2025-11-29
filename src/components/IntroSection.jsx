import React from "react";

const IntroSection = () => {
  const handleEmailClick = () => {
    const email = "varunnegiweb@gmail.com";
    const subject = "Project Inquiry";
    const body = "Hello!";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col items-start md:items-center">
        {/* Intro text */}
        <p className="font-prompt font-semibold text-2xl md:text-3xl max-w-xl text-gray-800 mb-8">
          Hey, what's up! I’m a freelance designer that's building engaging web experiences
          and bringing ideas to life since 2020. Available for remote-friendly work.
        </p>

        {/* Email Button */}
        <button
          onClick={handleEmailClick}
          className="bg-[#4F3B78] cursor-pointer text-white rounded-lg h-12 w-32 font-prompt font-bold text-lg mb-12"
        >
          Email-Me
        </button>

        {/* Work heading */}
        <h2 className="font-prompt font-extrabold text-4xl md:text-5xl text-[#363B4E] mt-4">
          Work
        </h2>
      </div>
    </section>
  );
};

export default IntroSection;
