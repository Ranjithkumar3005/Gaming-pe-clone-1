import { useState } from 'react'
import { Lock, UserCheck, CreditCard, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from "framer-motion";

const FraudProtection = () => {

    const [expandedCard, setExpandedCard] = useState(null);
    const fraudProtectionCards = [
        { id: 1, title: "User Authentication", icon: Lock, description: "Secure multi-factor authentication system", content: "Our advanced user authentication system employs multiple layers of security, including biometric verification, SMS verification, and hardware tokens. We use industry-standard encryption protocols and regular security audits to ensure maximum protection." },
        { id: 2, title: "Identity Verification", icon: UserCheck, description: "Real-time identity verification checks", content: "Comprehensive identity verification system that includes document verification, facial recognition, and cross-reference checks with global databases. Our AI-powered system can detect fraudulent documents and suspicious patterns in real-time." },
        { id: 3, title: "Transaction Monitoring", icon: CreditCard, description: "24/7 transaction surveillance system", content: "Continuous monitoring of all transactions using AI and machine learning algorithms to detect suspicious patterns. Our system analyzes hundreds of data points in real-time to prevent fraudulent transactions before they occur." },
        { id: 4, title: "Data Encryption", icon: Smartphone, description: "End-to-end data protection", content: "Military-grade encryption for all sensitive data, both at rest and in transit. We use the latest encryption standards and regularly update our security protocols to stay ahead of emerging threats." }
    ];

    return (
        <div className="mt-32 lg:px-30 md:p-10 sm:p-5">
            <div className="text-center mb-16 lg:px-50 md:p-20 sm:p:20">
                <h2 className="text-5xl font-bold text-white mb-4">FRAUD PROTECTION</h2>
                <p className="lg:text-lg text-gray-300 sm:text-sm ">
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

    )
}

export default FraudProtection