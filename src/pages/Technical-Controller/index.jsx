/* eslint-disable react/jsx-key */
import React from "react";
import TcCard from "./Components/TC-Card";
import { TCCardData } from "../../data";
import { assets } from "../../assets/assets";

const TechnicalController = () => {
  const logos = [assets.Tc1, assets.Tc2, assets.Tc3, assets.Tc4, assets.Tc5];

  return (
    <div className="bg-[#031521] px-6">
      {/* Heading */}
      <div className="flex flex-col items-center py-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
          Technical Connector
        </h1>
        <p className="text-base md:text-lg text-gray-300 font-semibold mt-3">
          Empowering seamless, global payment solutions with AI-driven
          innovation.
        </p>
      </div>

      {/* Connector Technology Services */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-[#031521] px-6 md:px-12 lg:px-24 space-y-10 md:space-y-0 md:space-x-10">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
            CONNECTOR <br /> TECHNOLOGY <br /> SERVICES
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-4 leading-relaxed">
            Welcome to Connector Technology Services, your trusted partner in
            payment solutions. We provide seamless and secure transaction
            processing to enhance business operations. Experience reliable
            service tailored to meet your specific needs.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center w-full md:w-1/2">
          {/* Background Shape */}
          <div className="absolute bottom-0 md:bottom-[50px] w-60 h-80 bg-gradient-to-b from-[#1d677d] to-[#b3a332] rounded-[48px]"></div>

          {/* Image */}
          <img
            src="https://gamingpe.io/assets/connector_img-BqgLmEVE.webp"
            alt="Person Holding Phone"
            className="relative z-10 w-[50%] lg:w-[80%]  object-cover"
          />

          {/* Yellow Curved Line */}
          {/* <div className="absolute right-38 top-72 w-32 h-24 border-[4px] border-yellow-400 rounded-full border-l-0 border-t-0"></div>
          <div className="absolute right-46 top-68 text-white text-2xl">✦</div> */}
        </div>
      </div>

      {/* Marquee of Logos */}
      <div className="mt-10">
        <div className="w-full border-t-2 border-green-500 opacity-70"></div>
        <div className="overflow-hidden whitespace-nowrap py-6">
          <div className="flex animate-marquee  items-center justify-between space-x-6">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={logo}
                  className="w-16 md:w-20"
                  alt={`logo-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t-2 border-green-500 opacity-70"></div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center space-y-10  py-10">
        {TCCardData.map((item, index) => (
          <TcCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalController;
