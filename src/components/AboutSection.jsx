import React from "react";
import Frame13 from "../assets/Frame13.svg";


const AboutSection = () => {
  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row gap-12">
        {/* Text */}
        <div className="lg:w-1/2">
          <h2 className="font-bold text-5xl text-[#363B4E] mb-6">About</h2>
          <p className="font-prompt text-gray-800 text-lg leading-relaxed">
            Hey there! 👋 I'm a freelance UI/UX designer with a passion for creating memorable digital experiences. 
            With over four years of hands-on experience, I've had the pleasure of collaborating with startups, 
            SaaS companies, and small businesses, helping them shape their online presence into something spectacular.
            <br /><br />
            My journey into the web began in the era of dial-up internet, witnessing the rapid evolution of website design unfold before my eyes. 
            With a degree in Industrial Engineering from the University of Texas at Arlington, I bring a unique perspective to the table. 
            This background taught me how to optimize processes and systems to create quality products that satisfy customers, 
            skills I seamlessly integrate into my approach to tackle complex design challenges.
            <br /><br />
            When I'm not crafting user interfaces or building user experiences, you can find me indulging in my other passions. 
            I have a penchant for drawing and painting, which you can explore further at www.drawnbyhb.com. 
            I also enjoy playing video games, watching anime, and nerding out about science and space.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img src={Frame13} alt="frame13" className="w-full max-w-lg rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
