import React from "react";

const Footer = () => {
  const handleEmailClick = () => {
    const email = "varunnegiweb@gmail.com";
    const subject = "Project Inquiry";
    const body = "Hello!";

    // Open Gmail compose in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="bg-[#CEC6FF] py-20">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col items-center text-center">
        <h2 className="font-sans font-bold text-4xl text-[#363B4E] mb-4">
          Have a Project in Mind?
        </h2>
        <h3 className="font-sans font-bold text-4xl text-[#363B4E] mb-6">
          Let's Work Together!
        </h3>
        <p className="font-prompt text-gray-800 font-semibold mb-8">
          Send me the details about your project. I'll help you <br /> design and/or build the website of your dreams!
        </p>
        <button
          onClick={handleEmailClick}
          className="bg-[#4F3B78] cursor-pointer text-white rounded-lg h-12 w-32 flex items-center justify-center font-bold font-prompt text-lg"
        >
          Email-Me
        </button>
      </div>
    </section>
  );
};

export default Footer;
