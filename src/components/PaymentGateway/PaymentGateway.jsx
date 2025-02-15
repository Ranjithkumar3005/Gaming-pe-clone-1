import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Lock, UserCheck, Smartphone } from 'lucide-react';
const PaymentGateway = () => {
    const cards = [
        "/assets/in-visa-platinum-card-498x280.webp",
        "/assets/in-visa-platinum-card-498x280.webp",
        "/assets/in-visa-platinum-card-498x280.webp",
        "/assets/in-visa-platinum-card-498x280.webp",
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 1000); // Change every 1 second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen bg-[#051622] flex items-center justify-center px-30">

            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
                <div className="relative flex justify-center items-center overflow-hidden pt-10">
                    <div className="absolute top-[3%] left-[10%] lg:w-100 lg:h-100 bg-gradient-to-b from-blue-500 to-[#051622] rounded-full opacity-20"></div>
                    <div className="absolute w-full h-full flex justify-center items-center">
                        <svg width="100%" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Curved Path */}
                            <path
                                d="M 15 1 Q 10 160, 150 75 T 350 185"
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
                    </div>
                    {/* Small White Stars */}
                    <div className="absolute top-[30%] left-[5%] w-4 h-4 bg-white rounded-full opacity-80"></div>

                    <div className="absolute bottom-[20%] right-[5%] w-5 h-5 bg-white rounded-full opacity-80"></div>

                    {/* Phone & Animated Card Container */}
                    <motion.div
                        className="relative flex flex-col items-center pl-15"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <img
                            src="/assets/processImg-CNmjTZZY.webp"
                            alt="Phone"
                            className="relative z-10 lg:w-[450px] lg:h-[480px] md:w-[300px] md:h-[300px] drop-shadow-lg"
                        />
                        <motion.img
                            key={currentCardIndex} // Ensures re-render on index change
                            src={cards[currentCardIndex]}
                            alt="Card"
                            className="absolute bottom-[20%] left-[60%] translate-x-[-50%] lg:w-70 md:w-52 shadow-lg z-20"
                            animate={{ rotateY: [0, 180, 360] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>

                {/* Text Content */}
                <div className="text-white text-left lg:w-1/2 mt-8 lg:mt-0">
                    <h2 className="text-5xl font-bold text-green-200">
                        SIMPLE PAYMENT <br /> GATEWAY PROCESS
                    </h2>
                    <p className="text-gray-300 mt-3">
                        GamingPe offers a seamless payment gateway with straightforward steps. Users can easily select their preferred payment method, enter details securely, and confirm their purchase. The process is quick, with minimal clicks, ensuring an effortless transaction experience while maintaining top-notch security throughout.
                    </p>

                    {/* Animated Icons & Text */}
                    <div className="mt-6 space-y-6">
                        {[
                            { title: "Create Account", desc: "Effortlessly set up your GamingPe account with a simple sign-up process, ready to embark on your gaming journey in minutes.", icon: Lock },
                            { title: "User Configuration", desc: "Customize your profile and preferences to enhance your gaming experience, ensuring everything is tailored to your needs.", icon: Smartphone },
                            { title: "Enjoy Full Access", desc: "Unlock all features and benefits of GamingPe, diving into a seamless and immersive gaming world without interruptions.", icon: UserCheck }
                        ].map((item, index) => (
                            <div key={index} className="flex space-x-4 items-start">
                                <div
                                    className="w-20 h-12 flex items-center justify-center rounded-full shadow-md"
                                    style={{
                                        background: "linear-gradient(155deg,#FACC15, #7DD3FC, #3B82F6)",
                                    }}
                                >   <motion.div
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ repeat: Infinity, duration: 4 + index, ease: "easeInOut" }}
                                >
                                        <item.icon className="w-8 h-8 text-black"></item.icon>

                                    </motion.div>
                                </div>
                                <div>

                                    <h3 className="text-xl font-semibold text-white pb-3">{item.title}</h3>
                                    <p className="text-white">{item.desc}</p>
                                </div></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway;
