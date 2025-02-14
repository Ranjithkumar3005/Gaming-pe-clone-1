import React, { useRef, useEffect, useState } from 'react';
import { Globe2, Users, Shield, ArrowRight, Lock, UserCheck, CreditCard, Smartphone, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from "framer-motion";

function Home() {
    const videoRef = useRef(null);
    const [expandedCard, setExpandedCard] = useState(null);
    const [rotatedCards, setRotatedCards] = useState(new Set());

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll('.fraud-card').forEach((card) => {
                const rect = card.getBoundingClientRect();
                const cardId = card.getAttribute('data-id');

                if (rect.top < window.innerHeight * 0.75 && !rotatedCards.has(cardId)) {
                    setRotatedCards((prev) => new Set([...prev, cardId])); // Ensure state updates correctly
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [rotatedCards]);


    const fraudProtectionCards = [
        { id: 1, title: "User Authentication", icon: Lock, description: "Secure multi-factor authentication system", content: "Our advanced user authentication system employs multiple layers of security, including biometric verification, SMS verification, and hardware tokens. We use industry-standard encryption protocols and regular security audits to ensure maximum protection." },
        { id: 2, title: "Identity Verification", icon: UserCheck, description: "Real-time identity verification checks", content: "Comprehensive identity verification system that includes document verification, facial recognition, and cross-reference checks with global databases. Our AI-powered system can detect fraudulent documents and suspicious patterns in real-time." },
        { id: 3, title: "Transaction Monitoring", icon: CreditCard, description: "24/7 transaction surveillance system", content: "Continuous monitoring of all transactions using AI and machine learning algorithms to detect suspicious patterns. Our system analyzes hundreds of data points in real-time to prevent fraudulent transactions before they occur." },
        { id: 4, title: "Data Encryption", icon: Smartphone, description: "End-to-end data protection", content: "Military-grade encryption for all sensitive data, both at rest and in transit. We use the latest encryption standards and regularly update our security protocols to stay ahead of emerging threats." }
    ];

    return (
        <div className="bg-[#051622] relative w-full overflow-hidden">
            {/* Background Video */}
            <video ref={videoRef} className="absolute inset-0 w-full min-h-[500px] max-h-[700px] object-cover" muted playsInline autoPlay loop>
                <source src="/videos/homeMap-DIlrE9fC.mp4" type="video/mp4" />
            </video>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-10 py-15">
                {/* Hero Section */}
                <div className="text-white max-w-3xl">
                    <h1 className="text-4xl mb-6">Global<br />Payment Gateway<br />for Developing Markets</h1>
                    <p className="text-xl font-semibold">Unlocking New Horizons For International<br />Growth</p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 px-12">
                    <div className="bg-white/5 hover:bg-[#051622]/50 backdrop-blur-lg p-10 rounded-2xl border border-white/20">
                        <br />
                        <div className="text-4xl font-bold text-white mb-4">About</div>
                        <p className="text-gray-200 text-[16px] pr-10">
                            Gamingpe, founded in 2014, specializes in state-of-the-art payment processing and gateway technology. With expertise in payment solutions, risk management, and AI-driven innovations, we empower merchants to streamline operations and safeguard revenue. Our mission is to revolutionize payment experiences and enable global reach for businesses.
                        </p>
                        <br />
                        <button className="border-3 border-[#00A6FB] bg-[#051622] text-white px-10 py-3 rounded-full text-[16px] cursor-pointer hover:bg-[#00A6FB] transition-colors duration-200">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white/5 hover:bg-[#051622]/50 backdrop-blur-lg p-18 rounded-2xl border border-white/20">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-white mb-4">50M+</div>
                                <p className="text-gray-200 text-[16px]">Over 50 million transactions processed with the highest success rate.</p>
                            </div>

                            <div className="border-l border-white pl-8">
                                <div className="text-4xl font-bold text-white mb-4">30+</div>
                                <p className="text-gray-200 text-[16px]">Available in over 30 languages to cater to a global audience.</p>
                            </div>
                        </div>
                        <br /><br />
                        <div className="text-[16px]">⭐⭐⭐⭐⭐</div>
                        <p className="text-gray-200 text-[16px]">We are supported with over 30+ languages</p>
                    </div>
                </div>

                {/* Fraud Protection Section */}
                <div className="mt-32 lg:px-12 md:p-2">
                    <div className="text-center mb-16 lg:px-50 md:p-20 sm:px-2">
                        <h2 className="text-5xl font-bold text-white mb-4">FRAUD PROTECTION</h2>
                        <p className="text-lg text-gray-300">
                            Keep transactions secure with advanced fraud detection. Our solutions are designed to provide unparalleled security for your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {fraudProtectionCards.map((card) => {
                            const Icon = card.icon;
                            const isExpanded = expandedCard === card.id;

                            return (
                                <div
                                    key={card.id}
                                    data-id={card.id}
                                    className={`group fraud-card mb-15 bg-[#00A6FB]/10 backdrop-blur-lg p-6 rounded-2xl border border-green-400/50 relative transition-all duration-500 ${isExpanded ? 'h-auto' : 'h-[150px]'
                                        }`}
                                >
                                    {/* Icon Wrapper - Move Up */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00A6FB]/10 z-10 border-2 border-green-500 p-6 rounded-full transition-all duration-500 ${isExpanded ? 'top-[-70px]' : 'top-[-30px] group-hover:top-[-20px]'} `}
                                    >
                                        <Icon className="w-12 h-12 text-green-500" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex flex-col items-center text-center pt-7">
                                        <h3 className="text-xl font-bold text-green-500 mb-2">{card.title}</h3>

                                        <motion.button
                                            onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                                            className="text-green-500 flex items-center gap-1 transition-colors"
                                            animate={!isExpanded ? { y: [0, -5, 0] } : { y: 0 }} // Bounce effect only on "Read More"
                                            transition={{
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                duration: 1.2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            {isExpanded ? 'Close' : 'Read More'}
                                            {isExpanded ? (
                                                <ChevronUp className="w-5 h-5 transform transition-transform duration-150" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 transform transition-transform duration-150" />
                                            )}
                                        </motion.button>


                                        {isExpanded && <div className="mt-4 text-gray-300">{card.content}</div>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
