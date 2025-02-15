import React from "react";
import { assets } from "../../assets/assets";

const AboutUs = () => {
  const logos = [
    assets.PT1,
    assets.PT2,
    assets.PT3,
    assets.Ether,
    assets.Bitcoin,
  ];

  return (
    <div className="bg-[#031521] text-white">
      {/* Heading */}
      <div className="flex flex-col items-center py-10 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
          ABOUT US
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 font-semibold">
          Make Gaming Transactions Easy
        </p>
      </div>

      {/* Principles Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
            Gamingpe's <br /> Principles
          </h1>

          <div className="flex flex-col gap-6 mt-6">
            {["Innovation", "Accessibility", "Expertise"].map((item, index) => (
              <div key={index}>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
                  {item}
                </h1>
                <p className="text-gray-300 text-md sm:text-lg mt-2 leading-relaxed">
                  Leading the Future of Digital Payments with groundbreaking
                  technology and advanced solutions, ensuring we stay ahead in
                  the rapidly evolving world of e-commerce payments.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Background Shape */}
          <div className="absolute -bottom-12 w-64 h-80 sm:w-80 sm:h-96 bg-gradient-to-b from-[#1d677d] to-[#b3a332] rounded-[48px]"></div>

          {/* Image */}
          <img
            src="https://gamingpe.io/assets/servicesImg-YfgI6RZx.webp"
            alt="Person Holding Phone"
            className="relative z-10 w-80 sm:w-96 object-cover"
          />
        </div>
      </div>

      {/* Marquee Logos */}
      <div className="mx-6 lg:mx-12 my-12">
        <div className="w-full border-t-2 border-green-500 opacity-70"></div>
        <div className="overflow-hidden whitespace-nowrap my-8">
          <div className="flex animate-marquee items-center">
            {logos.map((logo, index) => (
              <div key={index} className="mx-4">
                <img src={logo} className="h-10 sm:h-12" alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t-2 border-green-400 opacity-70"></div>
      </div>

      {/* AI Payments Section */}
      <div className="px-6 lg:px-40 my-10">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
          Empowering Seamless Payments and Growth Through AI Innovation
        </h1>

        {[
          {
            title: "Harnessing the Power of AI for Seamless Payment Solutions",
            description:
              "At Gamingpe, we leverage AI to connect consumers with e-commerce merchants, catering to their passions and preferences.",
          },
          {
            title: "Flexible, Interest-Free Payments and Personalized Controls",
            description:
              "Enjoy flexible, interest-free payment options and personalized controls for effortless financial management.",
          },
          {
            title: "Empowering Merchants for Enhanced Access and Growth",
            description:
              "Partnering with Gamingpe enables merchants to expand their reach and increase sales through secure and seamless payments.",
          },
        ].map((item, index) => (
          <div key={index} className="my-6">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
              {item.title}
            </h1>
            <p className="text-gray-300 text-md sm:text-lg mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Global Presence Section */}
      <div className="px-6 lg:px-40 py-16 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
            WE ARE ROUND THE WORLD
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            GamingPe connects gamers worldwide. With regional servers and
            localized support, we create a seamless gaming experience.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              { value: "20+", label: "Certified Experts" },
              { value: "1K+", label: "Successful Implementations" },
              { value: "100%", label: "Satisfied Users" },
              { value: "10+", label: "Industry Recognitions" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 border border-gray-700 rounded-lg text-center hover:bg-gray-800 transition"
              >
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <video
            autoPlay
            loop
            muted
            className="w-64 sm:w-80 md:w-full rounded-full"
          >
            <source src={assets.Globe} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
