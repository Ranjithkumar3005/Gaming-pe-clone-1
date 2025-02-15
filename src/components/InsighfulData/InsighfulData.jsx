import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

function InsighfulData() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    return (
        <div className="min-h-screen mt-10 px-30 bg-[#051622] text-white p-8">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-25 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold">
                            <span className="text-[#a8e6cf]">INSIGHTFUL</span> DATA
                            <br />
                            <span className="text-[#a8e6cf]">RICH</span> ANALYTICS
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Leverage real-time insights to understand payment trends, optimize
                            strategies, and drive growth in emerging markets with GamingPes
                            data-driven platform.
                        </p>
                        <div className="grid   grid-cols-2 gap-8">
                            <FeatureCard
                                width="250px"
                                title="Real-Time Data Access"
                                description="Instantly access detailed, data-rich reports to make informed decisions and adapt to dynamic market trends."
                            />

                            <FeatureCard
                                width="280px"
                                title="Enhanced Business Growth"
                                description="Utilize comprehensive insights to plan effective marketing strategies, manage budgets efficiently, and expand seamlessly into new regions."
                            />


                        </div>

                        <button className="border-3 border-[#00A6FB] bg-[#051622] text-white px-10 py-3 rounded-full text-[16px] cursor-pointer hover:bg-[#00A6FB] transition-colors duration-200">
                            Learn More
                        </button>
                    </div>


                    <div className="relative lg:p-20 w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                        {/* Background Container (Behind Video) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#a8e6cf] to-[#88d4bd] opacity-20 blur-3xl -z-10" />

                            {/* Circular Gradient Shape */}
                            <div className="absolute top-[11%] left-[22%] lg:w-70 lg:h-138 bg-gradient-to-b from-blue-500 to-orange-300 rounded-xl opacity-20"></div>

                            <motion.div
                                className="absolute w-full h-full flex justify-center items-center"
                                animate={{ y: [-10, 10, -10] }}  // Moves up and down
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg width="100%" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 15 1 Q 10 200, 300 60 T 350 350"
                                        stroke="url(#grad1)"
                                        strokeWidth="4"
                                        fill="transparent"
                                    />
                                    {/* Gradient Definition */}
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute top-[35%] left-[2%] w-4 h-4 bg-white rounded-full opacity-80"></div>
                                <div className="absolute bottom-[35%] right-[10%] w-5 h-5 bg-white rounded-full opacity-80"></div>

                            </motion.div>


                        </div>

                        {/* Video Container (Above Background) */}
                        <div className="relative border-1 border-sky-200/50 rounded-2xl h-[550px] bg-black/50">
                            <video
                                ref={videoRef}
                                className="p-5 w-full h-full object-cover rounded-xl"
                                muted
                                playsInline
                                autoPlay
                                loop
                            >
                                <source src="/videos/chatbot-DZXWAkFX.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

function FeatureCard({ width, title, description }) {
    return (
        <div
            className={`bg-[#081e2e] p-6 rounded-xl border border-[#a8e6cf] transition-colors duration-300`}
            style={{ width: width }}
        >    <div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-white">{description}</p>
            </div>

        </div>
    );
}

export default InsighfulData;