import React from "react";
import { motion } from "framer-motion";
const SubFeature = () => {
    const images = [
        "src\\assets\\paymentmethods2-CH6A_cmo.svg",
        "src\\assets\\download.svg",
        "src\\assets\\paymentmethods3-BG-ta1Ms.svg",
        "src\\assets\\paymentmethods4-DUdOYnni.svg",
        "src\\assets\\paymentmethods5-DHDmbJFk.svg",
    ];
    return (
        <div className="min-h-screen lg:px-30 bg-[#051622] text-white overflow-hidden">

            {/* Main Content */}
            <div className="relative h-[1000px]">
                {/* Header Section */}
                <div>
                    <img src="src\\assets\\aboutBanner-D1jHUpAf.png"></img>
                </div>

                {/* Integration Section */}
                <div className="absolute p-15 bottom-[17%] right-[10%] bg-[#0C2237] border border-blue-900/50  grid md:grid-cols-2 gap-8 max-w-4xl mx-auto rounded-3xl">
                    {/* Left Column */}
                    <div className="  rounded-xl ">
                        <h2 className="text-4xl font-bold mb-4">
                            JUST ONE API EASY INTEGRATION
                        </h2>
                        <p className="text-white mb-6">
                            GamingPEs One API integration connects businesses to multiple payment providers with a single REST API. It eliminates the need for customer payment providers' onboarding, execution and verifying local payment standards.
                        </p>
                        <p className="text-white">
                            This solution provides growers with enhanced access, allowing easy addition of new payment methods with centralized updates and maintenance. GamingPE ensures a smooth global payment experience.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="w-full overflow-hidden relative">
                            <div className="flex w-max">
                                {/* Two motion divs for seamless transition */}
                                {[0, 1].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="flex space-x-4"
                                        initial={{ x: "0%" }}
                                        animate={{ x: "-100%" }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 10,
                                            ease: "linear",
                                        }}
                                    >
                                        {images.map((src, index) => (
                                            <img key={index} src={src} alt={`Image ${index + 1}`} className="w-15 h-15 mr-2 rounded-lg shadow-md" />
                                        ))}
                                    </motion.div>
                                ))}
                            </div>

                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="text-5xl font-bold">100+</h3>
                            <p className="text-xl text-white">Global Payment Providers</p>
                        </div>

                        <div>
                            Simplify Your Payment Integration with Just One API Integration
                        </div>

                    </div>

                </div>
                <div className="absolute right-[13%] bottom-[8%]">
                    <img className="w-[400px] h-[250px] rounded-2xl" src="src\\assets\\visaCard-BnJ_DBUw.webp"></img>
                </div>


            </div>
        </div>
    );
};

export default SubFeature;